function DropdownNavContent () {
return (
    <>
   <div className="nav-dropdown-heading">
          <a id='nav-dropdown-heading-id' href="#" >Switch to Imperial</a>
          </div>   
          <div>
            <h6 className="nav-dropdown-option-heading">Temperature</h6>
            <p className="nav-dropdown-option-text">Celsius (&deg;C)</p>
            <p className="nav-dropdown-option-text">Farenhite (&deg;F)</p>
            <hr className="dropdown-line"></hr>
          </div>  
           <div>
            <h6 className="nav-dropdown-option-heading">Wind Speed</h6>
            <p className="nav-dropdown-option-text">km/h</p>
            <p className="nav-dropdown-option-text">mph</p>
            <hr className="dropdown-line"></hr>
          </div>  
           <div>
            <h6 className="nav-dropdown-option-heading">Precipitation</h6>
            <p className="nav-dropdown-option-text">Millimeters (mm)</p>
            <p className="nav-dropdown-option-text">Inches (in)</p>
          </div> 
          </>
);
}


export {DropdownNavContent} 