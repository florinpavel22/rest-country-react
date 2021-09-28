import CountryFilter from "./subcomponents/CountryFilter";
import RegionFilter from "./subcomponents/RegionFilter";

const Filters = ({ darkTheme, onCountryFilter, onRegionFilter, term }) => {
  return (
    <div className="filters-section">
      <CountryFilter
        darkTheme={darkTheme}
        onCountryFilter={onCountryFilter}
        term={term}
      />
      <RegionFilter darkTheme={darkTheme} onRegionFilter={onRegionFilter} />
    </div>
  );
};

export default Filters;
