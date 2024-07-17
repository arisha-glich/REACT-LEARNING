import React from 'react'
import { useState } from 'react';
import Search from '../components/Search';
import Filter from '../components/Filter';
import Countrieslistofcountries from '../components/Countrieslistofcountries';

function Home() {
    const [query, setQuery] = useState('');
    const [selectedRegion,  onRegionChange] = useState('')
  return (
    (
        <div className='app'>
          
          <div>
            <Search setQuery={setQuery} />
            <Filter selectedRegion={selectedRegion} onRegionChange ={onRegionChange} />
          </div>
          <div>
         <Countrieslistofcountries query={query} selectedRegion={selectedRegion}/>
          </div>
        </div>
      )
  )
}

export default Home


