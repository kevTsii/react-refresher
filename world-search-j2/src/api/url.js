
const API_BASE_URL = "https://restcountries.com/v3.1"
const API_GET_ALL = `${API_BASE_URL}/all?fields=name,capital,population,region,subregion,languages,currencies,timezones,flags,cca3`;
const API_GET_BY_NAME = `${API_BASE_URL}/name`;

export { API_BASE_URL, API_GET_ALL, API_GET_BY_NAME };