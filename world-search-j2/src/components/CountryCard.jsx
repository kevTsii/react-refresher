
export function CountryCard({country}) {
    const currencies = country.currencies;
    const capitalize = str => str.replace(/\b\w/g, char => char.toUpperCase());
    return (
        <div className="country-card">
            <div className="country-card-header">
                <img className="country-flag" src={country.flags?.png ?? country.flags?.svg} alt={country.name} />
                <h2 className="country-name">{country.name?.common}</h2>
            </div>
            <div className="country-card-body">
                <p className="country-detail"><span>Capital:</span> {country.capital?.[0] ?? "N/A"}</p>
                <p className="country-detail"><span>Region:</span> {country.subregion}</p>
                <p className="country-detail"><span>Languages:</span> {Object.values(country.languages ?? {})
                   .map(language => capitalize(language)).join(', ') || 'N/A'}
                </p>
                <p className="country-detail"><span>Timezones:</span> {country.timezones?.join(', ')}</p>
                <p className="country-detail"><span>Currencies:</span> {Object.values(currencies ?? {})
                    .map(currency => currency.symbol
                        ? `${capitalize(currency.name)} (${currency.symbol})`
                        : capitalize(currency.name))
                    .join(', ') || 'N/A'
                }
                </p>
            </div>
        </div>
    )
}
