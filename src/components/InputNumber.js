import React from "react";
import { Icon } from "@iconify/react";

class InputNumber extends React.Component {
  render(props) {
    return (
      <div className='flex justify-between  py-3 items-center '>
        <div className='gap-2'>
          <h1>{this.props.title}</h1>
          <h3 className='text-xs'>{this.props.text}</h3>
        </div>
        <div className=' flex items-center gap-4'>
          <Icon
            icon='gala:remove'
            fontSize={25}
            onClick={this.props.handleDecrement}
          />
          <input
            id={this.props.id}
            className='w-5 text-center'
            type='text'
            value={this.props.value}
            defaultValue={0}
          />
          <Icon
            icon='gala:add'
            fontSize={25}
            onClick={this.props.handleIncrement}
          />
        </div>
      </div>
    );
  }
}

export default InputNumber;
