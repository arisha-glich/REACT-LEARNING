import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import Filter from './components/Filter';
import Countrieslistofcountries from './components/Countrieslistofcountries';

function App() {
  const [query, setQuery] = useState('');
  const [selectedRegion,  onRegionChange] = useState('')
  const [Theme,PreviousTheme] = useState(false)

  return (
    <div className='app'>
      <Header Theme={Theme} PreviousTheme={PreviousTheme}/>
      <div>
        <Search setQuery={setQuery} />
        <Filter selectedRegion={selectedRegion} onRegionChange ={onRegionChange} />
      </div>
      <div>
     <Countrieslistofcountries query={query} selectedRegion={selectedRegion}/>
      </div>
    </div>
  );
}

export default App;
