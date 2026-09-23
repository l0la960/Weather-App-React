import logo from "./assets/logo.svg";
import unitsIcon from './assets/icon-units.svg'
import DropdownButton from "./COMPONENTS/DropdownButton";
import { DropdownNavContent } from "./COMPONENTS/DropdownChildren";


export default function Header() {
  return (
    <header>
      <nav>
        <div className="nav-logo-container">
          <img src={logo} id="nav-logo-id"></img>
        </div>
        <div className="nav-settings-btn-container">
          <DropdownButton name='Units' icon={unitsIcon}> 
          <DropdownNavContent></DropdownNavContent>
          </DropdownButton>
        </div>
      </nav>
    </header>
  );
}
