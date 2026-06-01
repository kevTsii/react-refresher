export function SearchBar({ query, setQuery }) {
    return (
        <input
            className="search-input"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher un pays..."
        />
    )
}