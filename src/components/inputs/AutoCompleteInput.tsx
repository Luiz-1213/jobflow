import React, { useState, useEffect } from "react";

interface Suggestion {
  label: string;
  value: string;
}

const AutoCompleteInput: React.FC = () => {
  const [query, setQuery] = useState<string>(""); // Valor digitado pelo usuário
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]); // Lista de sugestões
  const [isLoading, setIsLoading] = useState<boolean>(false); // Indica carregamento
  const [selectedLocation, setSelectedLocation] = useState<string>(""); // Localização selecionada

  // Função para buscar sugestões da API Nominatim
  const fetchSuggestions = async (query: string) => {
    if (query.trim().length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      setIsLoading(true);
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json&addressdetails=1&limit=5`
      );
      const data = await response.json();

      // Mapeia as sugestões retornadas pela API
      const formattedSuggestions = data.map((item: any) => ({
        label: `${
          item.address.city || item.address.town || item.address.village || ""
        }, ${item.address.state || ""}, ${item.address.country || ""}`,
        value: `${
          item.address.city || item.address.town || item.address.village || ""
        }, ${item.address.state || ""}, ${item.address.country || ""}`,
      }));
      setSuggestions(formattedSuggestions);
    } catch (error) {
      console.error("Erro ao buscar sugestões:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Lida com mudanças no input
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    fetchSuggestions(newQuery);
  };

  // Lida com a seleção de uma sugestão
  const handleSelectSuggestion = (suggestion: Suggestion) => {
    setSelectedLocation(suggestion.value);
    setQuery(suggestion.label); // Exibe no input
    setSuggestions([]); // Limpa as sugestões
  };

  return (
    <div style={{ position: "relative", width: "300px" }}>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Digite sua localização..."
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {isLoading && <div style={{ marginTop: "4px" }}>Carregando...</div>}
      {suggestions.length > 0 && (
        <ul
          style={{
            position: "absolute",
            top: "40px",
            left: "0",
            right: "0",
            border: "1px solid #ccc",
            backgroundColor: "white",
            listStyle: "none",
            padding: 0,
            margin: 0,
            maxHeight: "150px",
            overflowY: "auto",
            zIndex: 10,
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSelectSuggestion(suggestion)}
              style={{
                padding: "8px",
                cursor: "pointer",
              }}
            >
              {suggestion.label}
            </li>
          ))}
        </ul>
      )}
      {selectedLocation && (
        <div style={{ marginTop: "10px" }}>
          <strong>Localização Selecionada:</strong> {selectedLocation}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteInput;
