import React from "react";
import { Icon } from "@iconify/react";

class ImageCard extends React.Component {
  render(props) {
    return (
      <div className='pb-3 w-[150px] md:w-[400px] '>
        <div className='pb-[133.33%] w-[150px] md:w-[400px] relative gap-3 md:gap-10'>
          <img
            src={this.props.image}
            alt=''
            className=' absolute inset-0 w-full h-full rounded-md object-cover'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex text-xs md:text-lg gap-1 mt-2 '>
            <Icon icon='material-symbols:star' />
            <h1>{this.props.rating}</h1>
            <h1>({this.props.review})</h1>
            <div className='flex items-center'>
              <Icon icon='lucide:dot' />
              <h1>{this.props.gap} hours</h1>
            </div>
          </div>
          <p className='text-sm md:text-xl font-semibold leading-4 capitalize'>
            {this.props.title}
          </p>
          <h1 className='text-xs md:text-lg '>
            From {this.props.price} / person
          </h1>
        </div>
      </div>
    );
  }
}

export default ImageCard;
