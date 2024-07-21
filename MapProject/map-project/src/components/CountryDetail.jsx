import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CountryDetails from './CountryDetails'; // Import the new component
import { useParams } from 'react-router-dom';

export default function CountryDetail() {
  const { countryName } = useParams();
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCountryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);
        const [data] = response.data;

        const borders = data.borders || [];
        const borderResponses = await Promise.all(
          borders.map(border => axios.get(`https://restcountries.com/v3.1/alpha/${border}`))
        );
        const borderNames = borderResponses.map(response => response.data[0].name.common);

        setCountryData({
          name: data.name.common,
          nativeName: Object.values(data.name.nativeName)[0]?.common || 'N/A',
          population: data.population,
          region: data.region,
          subregion: data.subregion,
          capital: Array.isArray(data.capital) ? data.capital.join(', ') : 'N/A',
          flag: data.flags.svg,
          tld: data.tld.join(', '),
          languages: Object.values(data.languages).join(', '),
          currencies: Object.values(data.currencies).map(currency => currency.name).join(', '),
          borders: borderNames,
        });
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [countryName]);

  if (error) {
    return <div className="error-message">Country Not Found</div>;
  }

  if (loading) {
    return <div className="loading-spinner">Loading...</div>;
  }

  return countryData ? (
    <main>
      <CountryDetails countryData={countryData} />
    </main>
  ) : null;
}
