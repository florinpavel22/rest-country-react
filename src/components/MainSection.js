import Container from "./subcomponents/Container";
import Filters from "./Filters";
import RecentlyViewed from "./RecentlyViewed";
import CardsSection from "./CardsSection";
import "./styles/main-section.css";

const MainSection = ({
  darkTheme,
  countries,
  recentlyViewed,
  onCountryFilter,
  onRegionFilter,
  onCountryClick,
  term,
  isLoading,
  showRecent,
  setShowRecent,
}) => {
  return (
    <main className={darkTheme ? "main-section dark" : "main-section"}>
      <Container>
        {isLoading ? (
          <h2>Loading data...</h2>
        ) : (
          <>
            <Filters
              darkTheme={darkTheme}
              onCountryFilter={onCountryFilter}
              onRegionFilter={onRegionFilter}
              term={term}
            />
            {recentlyViewed.length !== 0 && (
              <RecentlyViewed
                recentlyViewed={recentlyViewed}
                onCountryClick={onCountryClick}
                darkTheme={darkTheme}
                showRecent={showRecent}
                setShowRecent={setShowRecent}
              />
            )}
            <CardsSection
              onCountryClick={onCountryClick}
              countries={countries}
              darkTheme={darkTheme}
            />
          </>
        )}
      </Container>
    </main>
  );
};

export default MainSection;
