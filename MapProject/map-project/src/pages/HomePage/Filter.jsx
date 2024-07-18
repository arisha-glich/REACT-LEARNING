import React from "react";
import PropTypes from "prop-types";

function Filter({ selectedRegion, onRegionChange }) {
  return (
    <select
    //Sets the current selected value of the dropdown to selectedRegion
      value={selectedRegion}
      //e.target.value retrieves the current value of the input field
      onChange={(e) => onRegionChange(e.target.value)}
      //Adds an event handler that triggers when the user selects a different option.
      // It calls onRegionChange with the new selected value (e.target.value)
      className="filter-by-region"
    >
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

Filter.propTypes = {
  selectedRegion: PropTypes.string.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};

export default Filter;
