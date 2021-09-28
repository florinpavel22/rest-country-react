import Card from "./Card";

const CardsSection = ({ countries, darkTheme, onCountryClick }) => {
  const renderCountries = () => {
    return (
      <>
        <h2>Countries List</h2>
        <div className="cards-section">
          {countries.map((country) => (
            <Card
              onCountryClick={onCountryClick}
              key={country.name}
              country={country}
              darkTheme={darkTheme}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="cards-section-wrapper">{countries.length === 0 ? <h2>No Result</h2> : renderCountries()}</div>
  );
};

export default CardsSection;
