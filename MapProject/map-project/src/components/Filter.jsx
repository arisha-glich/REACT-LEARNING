import React from "react";
import PropTypes from "prop-types";

function Filter({ selectedRegion, onRegionChange }) {
  return (
    <select
      value={selectedRegion}
      onChange={(e) => onRegionChange(e.target.value)}
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
