# World Search

A React mini-project to practice `useEffect`, `useRef` and API calls — real-time country search powered by the [REST Countries](https://restcountries.com) API.

## Features

- Live search with debounce (500 ms)
- All countries displayed on load
- Country card: flag, capital, region, population, languages, timezones, currencies
- Loading, error and empty states handled

## Concepts practiced

- `useEffect` — trigger fetch on query change and clean up the timer
- `useRef` — store the debounce timer without causing re-renders
- API calls — custom `useFetch` hook managing `data / loading / error` states

## Stack

- React
- REST Countries API v3.1

## Getting started

```bash
npm install
npm start
```

App available at [http://localhost:3000](http://localhost:3000).

## Structure

```
src/
├── api/
│   └── url.js            # REST Countries endpoints
├── components/
│   ├── SearchBar.jsx
│   ├── CountryList.jsx
│   └── CountryCard.jsx
├── hooks/
│   └── useFetch.js       # Generic fetch hook
└── App.jsx
```
