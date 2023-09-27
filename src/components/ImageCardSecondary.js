import React from "react";
import { Icon } from "@iconify/react";

class ImageCardSecondary extends React.Component {
  render(props) {
    return (
      <div className=' bg-white h-[100px]  gap-5 flex   w-[96%] md:w-fit rounded-lg fixed  bottom-0 mb-3 shadow shadow-slate-200 ml-2 md:mx-6 md:pr-6 md:left-[400px] '>
        <img
          src={this.props.img}
          alt=''
          height='100px'
          className='rounded-l-lg object-cover w-[80px] md:w-[150px]'
        />
        <div className='py-2 h-[100px] flex flex-col justify-between '>
          <div>
            <div className='flex text-xs gap-1 md:text-xl '>
              <Icon
                icon='material-symbols:star'
                className='text-sm md:text-xl'
              />
              <h1 className='text-sm md:text-xl'>{this.props.rating}</h1>
              <h1 className='text-sm md:text-xl'>({this.props.review})</h1>
              <h1 className='text-sm md:text-xl'>{this.props.gap} hours</h1>
            </div>
            <h1 className='text-xs md:text-xl font-bold'>{this.props.title}</h1>
          </div>
          <h1 className='text-xs md:text-xl'>
            From {this.props.price} / person
          </h1>
        </div>
      </div>
    );
  }
}

export default ImageCardSecondary;
