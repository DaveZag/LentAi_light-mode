import "./toggle.css";

export const Toggle = ({ onToggleChange, isChecked }) => {
  return (
    <div className="toggle-container">
      <input
        className="custom-toggle"
        type="checkbox"
        id="check"
        onChange={onToggleChange}
        checked={isChecked}
      />
      <label htmlFor="check">Theme</label>
    </div>
  );
};
