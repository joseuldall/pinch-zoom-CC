import "./styles.css";

import PinchZoom from "pinch-zoom-js";

const el = document.querySelector("div.pinch-zoom");

new PinchZoom(el, {
  tapZoomFactor: 1,
  maxZoom: 12,

  onDoubleTap: (pinch, event) => {
    event.preventDefault();
    console.log(pinch, event);
  },
});
