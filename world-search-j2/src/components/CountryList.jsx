import {CountryCard} from "./CountryCard";

export function CountryList({countries}) {
    return (
        <>
            {countries && countries.map(country => (
                <CountryCard key={country.cca3} country={country} />
            ))}
        </>
    )
}