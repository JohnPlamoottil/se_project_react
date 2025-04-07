import "./ToggleSwitch.css";

export default function ToggleSwitch() {
  return (
    <label htmlFor="" className="toggle-switch">
      <input type="checkbox" className="toggle-switch__checkbox" />
      <span className="toggle-switch__circle"></span>
      <span className="toggle-switch__text toggle-switch__text_F">F</span>
      <span className="toggle-switch__text toggle-swith__text_C">C</span>
    </label>
  );
}
