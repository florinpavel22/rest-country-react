import React from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.country = this.props.country;
  }

  render() {
    return (
      <div className={this.props.darkTheme ? "card dark" : "card"} onClick={() => this.props.onCountryClick(this.country)}>
        <img
          src={this.country.flag}
          alt={`${this.country.name} Flag`}
          className="thumbnail-flag"
        />
        <div className="country-details">
          <h4>{this.country.name}</h4>
          <p>
            <span>Population:</span>{" "}
            {this.country.population.toLocaleString("en-gb")}
          </p>
          <p>
            <span>Region:</span> {this.country.region}
          </p>
          <p>
            <span>Capital:</span>{" "}
            {!this.country.capital ? "N/A" : this.country.capital}
          </p>
        </div>
      </div>
    );
  }
}
