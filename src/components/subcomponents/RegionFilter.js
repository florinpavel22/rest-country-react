const RegionFilter = ({ darkTheme, onRegionFilter }) => {
  return (
    <form className="region-filter">
      <select className={darkTheme ? "dark" : ""} onChange={onRegionFilter}>
        <option value="">All</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </form>
  );
};

export default RegionFilter;
