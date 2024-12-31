import React, { useState } from "react";
import axios from "axios";

const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`http://127.0.0.1:5000/search?query=${query}`);
            setResults(response.data);
        } catch (error) {
            console.error("Error searching:", error);
            setResults([]);
        }
    };

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <h2>Search Page</h2>
            <form onSubmit={handleSearch}>
                <div style={{ marginBottom: "15px" }}>
                    <label htmlFor="query">Search Query:</label>
                    <input
                        type="text"
                        id="query"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>
                <button type="submit" style={{ padding: "10px 20px", cursor: "pointer" }}>
                    Search
                </button>
            </form>
            <div style={{ marginTop: "20px" }}>
                <h3>Results:</h3>
                {results.length > 0 ? (
                    <ul>
                        {results.map((item) => (
                            <li key={item.id}>
                                <strong>{item.name}</strong> - {item.phone} -{" "}
                                <a href={item.website} target="_blank" rel="noopener noreferrer">
                                    {item.website}
                                </a>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default SearchPage;
