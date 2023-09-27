import React from "react";
import { Icon } from "@iconify/react";

class HeadingSearchPage extends React.Component {
  render(props) {
    return (
      <div className='flex justify-between bg-slate-100 rounded-3xl items-center p-2 mx-5 md:mx-0'>
        <div className='flex gap-5 items-center'>
          <Icon icon='ep:back' className='text-xl' />
          <div>
            <h1 className='font-bold text-xl'>{this.props.country}</h1>
            <div className='flex gap-2 text-xs'>
              <h5>{this.props.date}</h5>
              <h5>{this.props.guest} guest</h5>
            </div>
          </div>
        </div>
        <div className='border p-2 rounded-full'>
          <Icon icon='carbon:settings-adjust' className='text-xl' />
        </div>
      </div>
    );
  }
}

export default HeadingSearchPage;
