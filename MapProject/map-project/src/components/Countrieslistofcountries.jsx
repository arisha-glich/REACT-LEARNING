import React from "react";
import PropTypes from "prop-types";
import  {countriesData} from '../api/data';
import CountriesCard from "./CountriesCard";

function CountriesList({ query, selectedRegion }) {
  const filteredCountries = countriesData.filter((country) => {
    const matchesQuery = country.name.common.toLowerCase().includes(query.toLowerCase());
    const matchesRegion = selectedRegion ? country.region === selectedRegion : true;
    return matchesQuery && matchesRegion;
  });

  return (
    <div className="countries-container">
      {filteredCountries.map((country) => (
        <CountriesCard
          key={country.name.common}
          name={country.name.common}
          flag={country.flags.svg}
          population={country.population}
          region={country.region}
          capital={country.capital ? country.capital[0] : 'N/A'}
        />
      ))}
    </div>
  );
}

CountriesList.propTypes = {
  query: PropTypes.string.isRequired,
  selectedRegion: PropTypes.string.isRequired,
};

export default CountriesList;
