"use client";

import { useState, useRef, useEffect } from "react";
import { countries, Country } from "@/data/countries";
import { HiChevronDown, HiMagnifyingGlass } from "@/components/icons";

interface CountryDropdownProps {
  selectedCountry: Country;
  onCountrySelect: (country: Country) => void;
  className?: string;
}

export function CountryDropdown({
  selectedCountry,
  onCountrySelect,
  className = "",
}: CountryDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Filter countries based on search term
  // Supports searching by country name (case-insensitive) or dial code
  useEffect(() => {
    if (searchTerm.trim() === "") {
      // Show all countries when search is empty
      setFilteredCountries(countries);
    } else {
      // Filter countries by name or dial code
      const filtered = countries.filter(
        (country) =>
          country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.dialCode.includes(searchTerm)
      );
      setFilteredCountries(filtered);
    }
  }, [searchTerm]);

  // Close dropdown when clicking outside
  // Improves UX by automatically closing the dropdown when user clicks elsewhere
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setSearchTerm(""); // Clear search when closing
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Focus search input when dropdown opens
  // Enables immediate typing without additional click
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleCountrySelect = (country: Country) => {
    onCountrySelect(country);
    setIsOpen(false);
    setSearchTerm("");
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setSearchTerm("");
    }
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      {/* Selected Country Display */}
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full px-3 md:px-4 py-1 md:py-2.5 border border-purple-200 rounded-md md:rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white/80 backdrop-blur-sm flex items-center justify-between text-left text-xs md:text-base"
      >
        <div className="flex items-center space-x-3">
          <span className="text-base md:text-lg">{selectedCountry.flag}</span>
          <span className="text-gray-700 font-medium">
            {selectedCountry.dialCode}
          </span>
        </div>
        <HiChevronDown
          className={`w-3.5 h-3.5 md:w-5 md:h-5 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-purple-200 rounded-md md:rounded-xl shadow-lg z-50 min-w-77 md:min-w-70 max-h-70 overflow-hidden">
          {/* Search Bar */}
          <div className="p-2 md:p-3 border-b border-gray-100">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-2 md:pl-3 flex items-center pointer-events-none">
                <HiMagnifyingGlass className="h-3 w-3 md:h-4 md:w-4 text-gray-400" />
              </div>
              <input
                ref={searchInputRef}
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by country name"
                className="w-full pl-8 md:pl-10 pr-3 md:pr-4 py-1.5 md:py-2 border border-gray-200 rounded-md md:rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-xs md:text-sm"
              />
            </div>
          </div>

          {/* Country List */}
          <div className="max-h-60 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((country) => (
                <button
                  key={country.code}
                  type="button"
                  onClick={() => handleCountrySelect(country)}
                  className={`w-full px-3 md:px-4 py-1.5 md:py-2 flex items-center justify-between text-left hover:bg-purple-50 transition-colors duration-150 ${
                    selectedCountry.code === country.code ? "bg-purple-100" : ""
                  }`}
                >
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-base md:text-lg">{country.flag}</span>
                    <span className="text-gray-700 text-xs md:text-sm">
                      {country.name}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <span className="text-gray-600 text-xs md:text-sm">
                      {country.dialCode}
                    </span>
                    <div
                      className={`w-3 h-3 md:w-4 md:h-4 rounded-full border-2 flex items-center justify-center ${
                        selectedCountry.code === country.code
                          ? "border-purple-600 bg-purple-600"
                          : "border-gray-300"
                      }`}
                    >
                      {selectedCountry.code === country.code && (
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </div>
                </button>
              ))
            ) : (
              <div className="px-3 md:px-4 py-2 md:py-3 text-gray-500 text-xs md:text-sm text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
