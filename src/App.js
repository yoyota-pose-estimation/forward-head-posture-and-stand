import React from "react"
import PoseNet from "@react-posenet/time"
import LocalStorageInput from "./components/LocalStorageInput"
import { writeDistance } from "./util"

const width = 600
const height = 500

const modelConfig = {
  architecture: "ResNet50",
  outputStride: 16,
  inputResolution: { width, height },
  quantBytes: 4
}

function getKeypointsObject(pose) {
  return pose.keypoints.reduce((acc, { part, position }) => {
    const { x, y } = position
    acc[part] = {
      x: x / width,
      y: y / height
    }
    return acc
  }, {})
}

function getDirection(keypoints) {
  const { leftEar, rightEar } = keypoints
  if (leftEar && rightEar) {
    return "front"
  }
  return leftEar ? "left" : "right"
}

function onEstimate(poses, date) {
  if (poses.length !== 1) return
  const [pose] = poses
  const keypointsObject = getKeypointsObject(pose)

  const direction = getDirection(keypointsObject)
  if (direction === "front") return

  const ear = keypointsObject[`${direction}Ear`]
  const hip = keypointsObject[`${direction}Hip`]
  const knee = keypointsObject[`${direction}Knee`]
  if (!ear || !hip || !knee) return

  const distance = direction === "left" ? ear.x - hip.x : hip.x - ear.x
  writeDistance("forward_head_posture", distance, date)
  writeDistance("stand", Math.abs(knee.x - hip.x), date)
}

function App() {
  return (
    <>
      <LocalStorageInput label="InfluxDB URL" />
      <PoseNet
        className="vh-100"
        frameRate={1}
        modelConfig={modelConfig}
        onEstimate={onEstimate}
        width={width}
        height={height}
      />
    </>
  )
}

export default App
