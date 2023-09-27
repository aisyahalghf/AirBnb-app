import React from "react";
import { Icon } from "@iconify/react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className=' bg-slate-100 '>
        <div className=' flex flex-row justify-between  items-center container mx-auto py-5'>
          <Icon icon='ei:arrow-up' rotate={1} vFlip={true} fontSize={40} />
          <div className=' flex flex-row gap-5'>
            <h1 className=' text-gray-400'>Stay</h1>
            <h1 className=' border-b-2 border-b-black text-black'>
              Experience
            </h1>
          </div>
          <div></div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
