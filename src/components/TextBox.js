import React from "react";

class TextBox extends React.Component {
  render(pros) {
    return (
      <section className='flex flex-row justify-between p-5  rounded-xl bg-white'>
        {this.props.children}
      </section>
    );
  }
}

export default TextBox;
