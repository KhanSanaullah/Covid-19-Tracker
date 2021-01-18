import React from "react";
import styles from "./App.module.css";
import image from "./images/image.png";
import { Cards, Chart, CountryPicker } from "./components/Items";
import { FetchData } from "./components/API/index";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    this.setState({ data: await FetchData() });
  }

  handleCountryChange = async (e) => {
    this.state.country = e;
    this.setState({ data: await FetchData(e) });
  };

  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
