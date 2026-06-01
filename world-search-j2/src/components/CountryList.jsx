import {CountryCard} from "./CountryCard";

export function CountryList({countries}) {
    return (
        <div className="country-list">
            {countries && countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </div>
    )
}