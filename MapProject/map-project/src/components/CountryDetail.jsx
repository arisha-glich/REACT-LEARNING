import React, { useEffect, useState } from 'react';


export default function CountryDetail() {
  const countryName = new URLSearchParams(window.location.search).get('name');

  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (countryName) {
      fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          return res.json();
        })
        .then(([data]) => {
          console.log(data); // For debugging
          setCountryData({
            name: data.name.common,
            nativeName: data.name.nativeName ? Object.values(data.name.nativeName)[0].common : 'N/A',
            population: data.population,
            region: data.region,
            subregion: data.subregion,
            capital: data.capital ? data.capital.join(', ') : 'N/A',
            flag: data.flags.svg,
            tld: data.tld ? data.tld.join(', ') : 'N/A',
            languages: data.languages ? Object.values(data.languages).join(', ') : 'N/A',
            currencies: data.currencies
              ? Object.values(data.currencies).map((currency) => currency.name).join(', ')
              : 'N/A',
            borderCountries: data.borders || [],
          });
        })
        .catch((error) => {
          console.error('Error fetching country data:', error);
          setError(error.message);
        });
    }
  }, [countryName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return countryData === null ? (
    'loading...'
  ) : (
    <main>
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
    </main>
  );
}
