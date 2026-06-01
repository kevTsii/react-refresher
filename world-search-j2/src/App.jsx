import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import {SearchBar} from "./components/SearchBar";
import {API_BASE_URL, API_GET_ALL, API_GET_BY_NAME} from "./api/url";
import {useFetch} from "./hooks/useFetch";
import {CountryList} from "./components/CountryList";

function App() {
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState('')
  const timerRef = useRef(null);
  const {data, loading, error} = useFetch(url);

  useEffect(() => {
    clearTimeout(timerRef.current);

    if (!query) {
      setUrl(`${API_GET_ALL}`);
      return;
    }

    const timeout = setTimeout(() => {
      setUrl(`${API_GET_BY_NAME}/${query}`)
    }, 500);
    timerRef.current = timeout;

    return () => clearTimeout(timeout);
  }, [query]);

  let content;
  if (loading) content = <div className="loading-spinner"><div className="spinner"></div></div>;
  else if (error) content = <p className="status-message error">{error.message}</p>;
  else if (data) content = <CountryList countries={data} />;
  else content = <p className="status-message">Recherchez un pays ci-dessus</p>;


  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">World Search</h1>
        <div className="search-wrapper">
          <SearchBar query={query} setQuery={setQuery} />
        </div>
      </header>
      {content}
    </div>
  );
}

export default App;
