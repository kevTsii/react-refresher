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
  if (loading) content = <p>loading ...</p>;
  else if (error) content = <p>{error.message}</p>;
  else if (data) content = <CountryList countries={data} />;
  else content = <p>No country found</p>;


  return (
    <div className="App">
      <SearchBar
        query={query}
        setQuery={setQuery}
      />
      {content}
    </div>
  );
}

export default App;
