import React from 'react';
import { Link } from 'react-router-dom';

function CountryDetails({ countryData }) {
  // Destructure the countryData object
  const {
    flag,
    name,
    nativeName,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders
  } = countryData;

  return (
    <div className="country-details-container">
      <span className="back-button" onClick={() => window.history.back()}>
        <i className="fa-solid fa-arrow-left"></i>&nbsp; Back
      </span>
      <div className="country-details">
        <img src={flag} alt={`${name} flag`} />
        <div className="details-text-container">
          <h1>{name}</h1>
          <div className="details-text">
            <p><b>Native Name: </b>{nativeName}</p>
            <p><b>Population: </b>{population.toLocaleString('en-IN')}</p>
            <p><b>Region: </b>{region}</p>
            <p><b>Sub Region: </b>{subregion}</p>
            <p><b>Capital: </b>{capital}</p>
            <p><b>Top Level Domain: </b>{tld}</p>
            <p><b>Currencies: </b>{currencies}</p>
            <p><b>Languages: </b>{languages}</p>

            <p><b>Border Countries: </b>&nbsp;
              {borders.length ? (
                borders.map((border) => (
                  <Link key={border} to={`/country/${border}`} className="border-link">
                    {border}
                  </Link>
                ))
              ) : (
                'None'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
