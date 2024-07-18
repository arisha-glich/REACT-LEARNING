//npm install axios
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails'; // Import the new component

export default function CountryDetail() {
  const countryName = new URLSearchParams(window.location.search).get('name'); // getting name from URL

  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const data = response.data[0];
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
      } catch (error) {
        console.error('Error fetching country data:', error);
        setError(error.message);
      }
    };

    if (countryName) {
      fetchCountryData();
    }
  }, [countryName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return countryData === null ? (
    'loading...'
  ) : (
    <main>
      <CountryDetails countryData={countryData} /> {/* Use the new component */}
    </main>
  );
}
