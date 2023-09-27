import React from "react";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const dataDestinations = [
  {
    id: 1,
    name: "Italy",
  },
  {
    id: 2,
    name: "Amalfi Coast, Italy",
  },
  {
    id: 3,
    name: "Florence, Italy",
  },
  {
    id: 4,
    name: "Lake Como, Italy",
  },
  {
    id: 5,
    name: "Milan, Italy",
  },
];

class DestinationPicker extends React.Component {
  state = {
    destination: "",
    dataCountries: [],
  };

  inputHandler = (event) => {
    const datas = dataDestinations;
    const dataToRender = datas.filter((country) =>
      country.name
        .toLocaleLowerCase()
        .includes(event.target.value.toLocaleLowerCase())
    );
    return this.setState({
      destination: event.target.value,
      dataCountries: dataToRender,
    });
  };

  buttonCountrySelected = (country) => {};

  showSuggestion = () => {
    const countries = this.state.dataCountries;
    return countries.map((country) => {
      return (
        <Link
          to={`/search/${country.name}`}
          key={country.id}
          className=' flex gap-5 items-center mt-3'
        >
          <div className=' bg-slate-200 p-3 rounded-xl'>
            <Icon
              icon='streamline:travel-map-location-pin-navigation-map-maps-pin-gps-location'
              hFlip={true}
            />
          </div>
          <div>
            <h1>{country.name}</h1>
          </div>
        </Link>
      );
    });
  };

  render() {
    return (
      <>
        <Navbar />
        <section className='flex-1 pt-10 mx-10'>
          <InputGroup onChange={this.inputHandler}>
            <InputLeftElement pointerEvents='none' className='py-6'>
              <Icon
                icon='material-symbols:search'
                rotate={1}
                vFlip={true}
                fontSize={20}
                className=' text-slate-500 '
              />
            </InputLeftElement>
            <Input
              type='tel'
              placeholder='Search destinantions'
              className='py-6'
            />
          </InputGroup>
          {this.showSuggestion()}
        </section>
      </>
    );
  }
}

export default DestinationPicker;
