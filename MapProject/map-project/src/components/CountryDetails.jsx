import React from 'react';

function CountryDetails({ countryData }) {
  return (
    <div className="country-details-container">
      <span className="back-button">
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name} flag`} />
        <div className="details-text-container">
          <h1>{countryData.name}</h1>
          <div className="details-text">
            <p>
              <b>Native Name: </b>{countryData.nativeName}
            </p>
            <p>
              <b>Population: </b>{countryData.population.toLocaleString('en-IN')}
            </p>
            <p>
              <b>Region: </b>{countryData.region}
            </p>
            <p>
              <b>Sub Region: </b>{countryData.subregion}
            </p>
            <p>
              <b>Capital: </b>{countryData.capital}
            </p>
            <p>
              <b>Top Level Domain: </b>{countryData.tld}
            </p>
            <p>
              <b>Currencies: </b>{countryData.currencies}
            </p>
            <p>
              <b>Languages: </b>{countryData.languages}
            </p>
          </div>
          <div className="border-countries">
            <b>Border Countries: </b>&nbsp;
            {countryData.borderCountries.length ? (
              countryData.borderCountries.join(', ')
            ) : (
              'None'
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
