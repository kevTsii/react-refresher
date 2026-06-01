
export function CountryCard({country}) {
    const currencies = country.currencies;
    const capitalize = str => str.replace(/\b\w/g, char => char.toUpperCase());
    return (
        <div>
            <div>
                <h2>{country.name.common}</h2>
                <img src={country.flags.png} alt={country.name} />
            </div>
            <div>
                <p>Capital: {country.capital[0]}</p>
                <p>Region: {country.subregion}</p>
                <p>Languages: {Object.values(country.languages).map(language => capitalize(language)).join(', ')}</p>
                <p>Timezones: {country.timezones.join(', ')}</p>
                <p>Currencies: {Object.values(currencies).map(currency => capitalize(currency.name)).join(', ')}</p>
            </div>
        </div>
    )
}