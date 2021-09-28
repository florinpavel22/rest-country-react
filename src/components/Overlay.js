import React from "react";
import Container from "./subcomponents/Container";
import CloseBtn from "./subcomponents/CloseBtn";
import CountryDetails from "./subcomponents/CountryDetails";
import "./styles/overlay.css";

const Overlay = ({ countryData, darkTheme, onCloseClick }) => {
  return (
    <div className={`${darkTheme ? 'dark' : ''} overlay`}>
      <Container>
        {countryData ? (
          <>
          <CloseBtn onCloseClick={onCloseClick} darkTheme={darkTheme}/>
            <div className="country-wrapper container">
              <div className="country-content">
                <img src={countryData.flag} alt="Flag" className="full-flag" />
                <div className="country-info">
                  <h4>{countryData.name}</h4>
                  <CountryDetails countryData={countryData} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <h2>Fetching data...</h2>
        )}
      </Container>
    </div>
  );
};

export default Overlay;
