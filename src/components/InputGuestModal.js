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
import { Icon } from "@iconify/react";
import InputNumber from "./InputNumber";

class InputGuestModal extends React.Component {
  state = {
    valueAdult: 0,
    valueChildren: 0,
    valueInfants: 0,
  };
  handleIncrement = (id) => {
    if (id.id === "adult") {
      const temp = this.state.valueAdult + 1;
      this.setState({ valueAdult: temp });
    } else if (id.id === "children") {
      const temp = this.state.valueChildren + 1;
      this.setState({ valueChildren: temp });
    } else if (id.id === "infants") {
      const temp = this.state.valueInfants + 1;
      this.setState({ valueInfants: temp });
    }
  };
  handleDecrement = (id) => {
    if (this.state.valueAdult > 0 && id.id === "adult") {
      const temp = this.state.valueAdult - 1;
      this.setState({ valueAdult: temp });
    } else if (this.state.valueChildren > 0 && id.id === "children") {
      const temp = this.state.valueChildren - 1;
      this.setState({ valueChildren: temp });
    } else if (this.state.valueInfants > 0 && id.id === "infants") {
      const temp = this.state.valueInfants - 1;
      this.setState({ valueInfants: temp });
    }
  };

  render(props) {
    const totalGuest = this.state.valueAdult + this.state.valueChildren;

    return (
      <>
        <Button variant='ghost' onClick={this.props.onOpen}>
          {this.props.titleOpen}
        </Button>
        <Modal isOpen={this.props.isOpen} onClose={this.props.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Who's Coming?</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className='gap-10'>
                <InputNumber
                  id='adult'
                  title={"Adults"}
                  text={"Ages 13 or above"}
                  value={this.state.valueAdult}
                  handleIncrement={() => this.handleIncrement({ id: "adult" })}
                  handleDecrement={() => this.handleDecrement({ id: "adult" })}
                />
                <hr />
                <InputNumber
                  title={"Children"}
                  text={"Ages 2-12"}
                  value={this.state.valueChildren}
                  handleIncrement={() =>
                    this.handleIncrement({ id: "children" })
                  }
                  handleDecrement={() =>
                    this.handleDecrement({ id: "children" })
                  }
                />
                <hr />
                <InputNumber
                  title={"Infants"}
                  text={"Under 2"}
                  value={this.state.valueInfants}
                  handleIncrement={() =>
                    this.handleIncrement({ id: "infants" })
                  }
                  handleDecrement={() =>
                    this.handleDecrement({ id: "infants" })
                  }
                />
              </div>
            </ModalBody>
            <ModalFooter justifyContent='space-between'>
              <Button variant='link' mr={3} onClick={this.props.onReset}>
                Clear all
              </Button>
              <Button
                colorScheme='red'
                onClick={() => this.props.handleSearch(totalGuest)}
                variant='solid'
              >
                <div className='flex gap-1'>
                  <Icon
                    icon='material-symbols:search'
                    rotate={1}
                    vFlip={true}
                    fontSize={20}
                    color='white'
                    className=' text-slate-500'
                  />
                  <h1>Search</h1>
                </div>
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }
}

export default InputGuestModal;
