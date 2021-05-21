import React from "react";
import "./ToggleSwitch.css";

function ToggleSwitch(props) {
  return (
    <div class="onoffswitch">
      <input
        type="checkbox"
        name="onoffswitch"
        class="onoffswitch-checkbox"
        id="myonoffswitch"
        tabindex="0"
        checked
      />
      <label class="onoffswitch-label" for="myonoffswitch">
        <span class="onoffswitch-inner"></span>
        <span class="onoffswitch-switch"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
