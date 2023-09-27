import DestinationPicker from "./pages/DestinationPicker";
import React from "react";
// import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import DateAndGuestPicker from "./pages/DateAndGuestPicker";
import SearchPage from "./pages/SearchPage";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/' element={<DestinationPicker />} />
          <Route path='/search/:country' element={<DateAndGuestPicker />} />
          <Route
            path='/search/:country/:date/:guest'
            element={<SearchPage />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
