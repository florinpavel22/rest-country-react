const CountryDetails = ({ countryData }) => {
  return (
    <div className="details">
      <ul>
        <li>
          <span>Native Name:</span> {countryData.nativeName}
        </li>
        <li>
          <span>Population:</span> {countryData.population.toLocaleString("en-gb")}
        </li>
        <li>
          <span>Region:</span> {countryData.region}
        </li>
        <li>
          <span>Sub Region:</span> {countryData.subregion ? countryData.subregion : "N/A"}
        </li>
        <li>
          <span>Capital:</span> {countryData.capital ? countryData.capital : "N/A"}
        </li>
      </ul>

      <ul>
        <li>
          <span>Top Level Domain:</span> {countryData.topLevelDomain}
        </li>
        <li>
          <span>Currencies:</span> {countryData.currencies.map((currency) => currency.name).join(", ")}
        </li>
        <li>
          <span>Languages:</span> {countryData.languages.map((language) => language.name).join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default CountryDetails;
