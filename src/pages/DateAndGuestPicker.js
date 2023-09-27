import React from "react";
import TextBox from "../components/TextBox";
import InputGuestModal from "../components/InputGuestModal";
import { format } from "date-fns";
import InputCalendarModal from "../components/InputCalendarModal";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const withRouter = (WrappedComponent) => (props) => {
  const navigate = useNavigate();
  // other hooks

  return <WrappedComponent {...props} {...{ navigate /* other hooks */ }} />;
};

class DateAndGuestPicker extends React.Component {
  state = {
    country: "",
    startDate: "",
    endDate: "",
    totalGuest: 0,
    isOpen: false,
    isOpenGuestInput: false,
  };
  componentDidMount() {
    const { country } = this.props.params;
    this.setState({ country });
    this.onOpen();
  }
  onOpen = () => this.setState({ isOpen: true });
  onClose = () => this.setState({ isOpen: false });
  onOpenGuest = () => this.setState({ isOpenGuestInput: true });
  onCloseGuest = () => this.setState({ isOpenGuestInput: false });
  onReset = () => {
    this.setState({ startDate: "", endDate: "", totalGuest: 0 });
    this.onCloseGuest();
  };

  handleNext = (value) => {
    if (value.length === 2) {
      const endDate = format(value[1], "dd MMM");
      this.setState({ endDate: endDate });
      const startDate = format(value[0], "dd MMM");
      this.setState({ startDate: startDate });
    }
    this.onClose();
    this.onOpenGuest();
  };

  handleSearch = (input) => {
    const navigate = this.props.navigate;
    const country = this.state.country;
    const date = `${this.state.startDate} - ${this.state.endDate}`;
    this.setState({ totalGuest: input });
    this.onCloseGuest();
    navigate(`/search/${country}/${date}/${input}`);
  };

  renderShowDate = () => {
    const startDate = this.state.startDate;
    if (startDate) {
      return (
        <InputCalendarModal
          titleOpen={`${this.state.startDate} - ${this.state.endDate}`}
          onClose={this.onClose}
          onOpen={this.onOpen}
          isOpen={this.state.isOpen}
          handleNext={this.handleNext}
        />
      );
    }

    return (
      <InputCalendarModal
        titleOpen='Add dates'
        onClose={this.onClose}
        onOpen={this.onOpen}
        isOpen={this.state.isOpen}
        handleNext={this.handleNext}
      />
    );
  };

  render() {
    return (
      <>
        <Navbar />
        <section className='h-screen  bg-slate-100'>
          <div className='container mx-auto pt-5 flex flex-col gap-5'>
            <TextBox>
              <h1>Where</h1>
              <h1>{this.state.country}</h1>
            </TextBox>
            <TextBox>
              <h1>When</h1>
              {this.renderShowDate()}
            </TextBox>
          </div>
          <InputGuestModal
            onClose={this.onCloseGuest}
            isOpen={this.state.isOpenGuestInput}
            handleSearch={this.handleSearch}
            onReset={this.onReset}
          />
        </section>
      </>
    );
  }
}

export default withRouter(withParams(DateAndGuestPicker));
