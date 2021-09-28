const CountryFilter = ({ darkTheme, onCountryFilter, term }) => {
  return (
    <form className="country-filter" onSubmit={e => e.preventDefault()}>
      <input
        onChange={onCountryFilter}
        className={darkTheme ? "dark" : ""}
        type="text"
        placeholder="Search for a country..."
        value={term}
      />
    </form>
  );
};

export default CountryFilter;
