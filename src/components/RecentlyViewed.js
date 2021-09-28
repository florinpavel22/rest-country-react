import Card from "./Card";

const RecentlyViewed = ({
  recentlyViewed,
  onCountryClick,
  darkTheme,
  showRecent,
  setShowRecent,
}) => {
  return (
    <div className="recent">
      <div className="recent-informative">
        <h2>Recently Viewed</h2>
        <button
          onClick={() => setShowRecent(!showRecent)}
          className={`${darkTheme ? "dark recent-btn" : "recent-btn"}`}
        >
          {showRecent ? "Hide" : "Show"}
        </button>
      </div>
      {showRecent && (
        <div className="cards-section">
          {recentlyViewed.map((country) => (
            <Card
              onCountryClick={onCountryClick}
              key={country.name}
              country={country}
              darkTheme={darkTheme}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentlyViewed;
