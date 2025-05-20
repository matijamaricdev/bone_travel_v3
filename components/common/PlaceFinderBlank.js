import { useState, useEffect, useRef } from "react";

const PlacesAutocomplete = ({ onSelect, defaultValue = "" }) => {
  const [inputValue, setInputValue] = useState(defaultValue);
  const inputRef = useRef(null);
  const autocompleteRef = useRef(null); // <-- keep autocomplete object clean

  useEffect(() => {
    setInputValue(defaultValue); // update input when default changes
  }, [defaultValue]);

  useEffect(() => {
    if (typeof window !== "undefined" && window.google && inputRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        types: ["geocode"],
        componentRestrictions: { country: "hr" },
      });

      autocompleteRef.current.addListener("place_changed", () => {
        const place = autocompleteRef.current.getPlace();
        if (place && place.geometry && place.geometry.location) {
          const lat = place.geometry.location.lat();
          const lng = place.geometry.location.lng();
          const name = place.formatted_address || place.name || "";

          setInputValue(name);
          onSelect({ lat, lng, name }); // ✅ full object: lat, lng, name
        }
      });
    }
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type your destination..."
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="search-input"
      id="inputFieldId"
    />
  );
};

export default PlacesAutocomplete;
