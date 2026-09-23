import dropDownIcon from "../assets/icon-dropdown.svg";

export default function DropdownButton({ name, children, icon }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <img alt='settings icon' src={icon}></img>
        {name}
        <img alt='dropdown icon' src={dropDownIcon}></img>
      </button>
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
