import React from "react";
import Header from "./Header";
import MainSection from "./MainSection";
import Overlay from "./Overlay";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      darkTheme: false,
      countriesHolder: [],
      filteredCountries: [],
      term: "",
      region: "",
      clickedCountry: "",
      clickedCountryData: null,
      recentlyViewed: [],
      overlayDisplay: false,
      isLoading: true,
      showRecent: false,
    };
    this.onThemeToggler = this.onThemeToggler.bind(this);
    this.onCountryFilter = this.onCountryFilter.bind(this);
    this.onRegionFilter = this.onRegionFilter.bind(this);
    this.onCountryClick = this.onCountryClick.bind(this);
    this.onCloseClick = this.onCloseClick.bind(this);
    this.setShowRecent = this.setShowRecent.bind(this);
  }

  componentDidMount() {
    const fetchAllCountries = async () => {
      const response = await fetch("https://restcountries.com/v2/all");
      const data = await response.json();
      this.setState({
        countriesHolder: data,
        filteredCountries: data,
        isLoading: false,
      });
    };

    fetchAllCountries();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.term !== this.state.term) {
      const filtered = this.state.countriesHolder.filter((country) =>
        country.name.toLowerCase().includes(this.state.term.toLowerCase())
      );
      this.setState({ filteredCountries: filtered });
    }

    if (prevState.region !== this.state.region) {
      if (this.state.region === "") {
        this.setState({ filteredCountries: this.state.countriesHolder });
        return;
      }
      const filtered = this.state.countriesHolder.filter(
        (country) => country.region === this.state.region
      );
      this.setState({ filteredCountries: filtered });
    }

    if (prevState.clickedCountry !== this.state.clickedCountry) {
      fetch(
        `https://restcountries.com/v2/name/${this.state.clickedCountry}`
      )
        .then((res) => res.json())
        .then((data) => {
          this.setState({ clickedCountryData: data[0] });
        })
        .catch((err) => console.log(err));
    }
  }

  onThemeToggler() {
    this.setState({ darkTheme: !this.state.darkTheme });
  }

  onCountryFilter(e) {
    this.setState({ term: e.target.value });
  }

  onRegionFilter(e) {
    this.setState({ region: e.target.value });
  }

  onCountryClick(country) {
    const { recentlyViewed } = this.state;
    const newState = {
      clickedCountry: country.name,
      overlayDisplay: true,
      term: "",
    };

    if (!recentlyViewed.includes(country)) {
      newState.recentlyViewed = recentlyViewed.slice(0, 3);
      newState.recentlyViewed.unshift(country);
    }

    this.setState(newState);
  }

  onCloseClick() {
    this.setState({
      clickedCountry: "",
      clickedCountryData: null,
      overlayDisplay: false,
    });
  }

  setShowRecent() {
    this.setState({ showRecent: !this.state.showRecent });
  }

  render() {
    return (
      <>
        <Header
          onThemeToggler={this.onThemeToggler}
          darkTheme={this.state.darkTheme}
        />
        {this.state.overlayDisplay ? (
          <Overlay
            countryData={this.state.clickedCountryData}
            darkTheme={this.state.darkTheme}
            onCloseClick={this.onCloseClick}
          />
        ) : (
          <MainSection
            countries={this.state.filteredCountries}
            recentlyViewed={this.state.recentlyViewed}
            darkTheme={this.state.darkTheme}
            onCountryFilter={this.onCountryFilter}
            onRegionFilter={this.onRegionFilter}
            onCountryClick={this.onCountryClick}
            term={this.state.term}
            isLoading={this.state.isLoading}
            showRecent={this.state.showRecent}
            setShowRecent={this.setShowRecent}
          />
        )}
      </>
    );
  }
}
