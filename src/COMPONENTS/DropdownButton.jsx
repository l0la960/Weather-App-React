import dropDownIcon from "../assets/icon-dropdown.svg";

export default function DropdownButton({ name, children, icon }) {
  return (
    <div className="dropdown">
      <button className="dropbtn">
        <img src={icon}></img>
        {name}
        <img src={dropDownIcon}></img>
      </button>
      <div className="dropdown-content">{children}</div>
    </div>
  );
}
