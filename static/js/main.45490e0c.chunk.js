(this["webpackJsonpforward-head-posture"]=this["webpackJsonpforward-head-posture"]||[]).push([[0],{112:function(e,t,n){e.exports=n(225)},123:function(e,t){},125:function(e,t){},155:function(e,t){},156:function(e,t){},214:function(e,t){},216:function(e,t){},225:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(105),c=n.n(o),l=n(18),i=n(106),u=n.n(i),s=n(228),f=n(107),m=n.n(f),h=n(227),d=n(226),v=n(109),g=function(e){var t=e.label,n=e.value,a=e.onChange;return r.a.createElement(h.a,null,r.a.createElement(h.a.Group,{as:d.a,className:"d-flex"},r.a.createElement(h.a.Label,{column:!0,sm:"2"},t),r.a.createElement(v.a,{sm:"10"},r.a.createElement(h.a.Control,{type:"text",placeholder:"Enter ".concat(t),value:n,onChange:a}))))},p=function(e){var t=e.label,n=function(e){var t=Object(a.useState)(localStorage.getItem(e)||""),n=Object(l.a)(t,2),r=n[0],o=n[1];return[r,function(t){o(t.target.value),localStorage.setItem(e,t.target.value)}]}(m()(t,{lower:!0})),o=Object(l.a)(n,2),c=o[0],i=o[1];return r.a.createElement(g,{label:t,value:c,onChange:i})},E=n(110),w=n.n(E),b=localStorage.getItem("influxdb-url"),x={writePoints:function(){}};try{x=new w.a.InfluxDB(b)}catch(S){console.error(S)}function y(e,t,n){x.writePoints([{fields:{distance:t},measurement:e,timestamp:n}])}var k=600,j=500;var C={architecture:"ResNet50",outputStride:16,inputResolution:{width:k,height:j},quantBytes:4};function I(e,t){if(1===e.length){var n=function(e){return e.keypoints.reduce((function(e,t){var n=t.part,a=t.position,r=a.x,o=a.y;return e[n]={x:r/k,y:o/j},e}),{})}(Object(l.a)(e,1)[0]),a=function(e){var t=e.leftEar,n=e.rightEar;return t&&n?"front":t?"left":"right"}(n);if("front"!==a){var r=n["".concat(a,"Ear")],o=n["".concat(a,"Hip")],c=n["".concat(a,"Knee")];if(r&&o&&c)y("forward_head_posture","left"===a?r.x-o.x:o.x-r.x,t),y("stand",Math.abs(c.x-o.x),t)}}}var O=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(p,{label:"InfluxDB URL"}),r.a.createElement(s.a,{size:"lg",block:!0,onClick:function(){o((function(e){return!e}))}},n?"start":"stop"),n?r.a.createElement("div",null):r.a.createElement(u.a,{className:"vh-100",frameRate:1,modelConfig:C,onEstimate:I,width:k,height:j}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[112,1,2]]]);
//# sourceMappingURL=main.45490e0c.chunk.js.map