import searchIcon from "./assets/icon-search.svg";
import Button from "./COMPONENTS/Button";

export default function SearchBar() {
  return (
    <section>
      <div className="searchbar-container">
        <h1 className="searchbar-text">How's the sky looking today?</h1>
        <div className="searchbar-input-searchbtn-group">
          <div className="searchbar-input-icon-group">
            <img src={searchIcon} className="searchbar-input-icon"></img>
            <input
              id="searchbar-input"
              placeholder="Search for a place..."
            ></input>
          </div>
          <Button name="Search" classname='search-btn' />
        </div>
      </div>
    </section>
  );
}
