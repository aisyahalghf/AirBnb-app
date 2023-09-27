import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class InputCalendarModal extends React.Component {
  state = {
    dateSelected: [],
    message: "",
  };
  handlePickDate = (value) => this.setState({ dateSelected: value });

  handleSubmit = (handleNext) => {
    if (this.state.dateSelected.length === 0) {
      return this.setState({ message: "Please mark calendar min 2 days" });
    }
    return handleNext(this.state.dateSelected);
  };

  render(props) {
    const dateSelected = this.state.dateSelected;
    return (
      <>
        <h1 className=' hover: cursor-pointer' onClick={this.props.onOpen}>
          {this.props.titleOpen}
        </h1>
        <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>When's your trip?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>
                <Calendar
                  minDate={new Date()}
                  selectRange={true}
                  value={this.state.dateSelected}
                  onChange={this.handlePickDate}
                />
              </div>
              <h1 className=' text-xs text-red-500 italic mt-2'>
                {this.state.message}
              </h1>
            </ModalBody>
            <ModalFooter>
              <Button variant='link' mr={3} onClick={this.props.onClose}>
                Skip
              </Button>
              <Button
                colorScheme='green'
                isDisabled={dateSelected.length < 1}
                onClick={() => this.handleSubmit(this.props.handleNext)}
                variant='solid'
              >
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default InputCalendarModal;
