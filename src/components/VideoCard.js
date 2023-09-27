import React from "react";
import { Icon } from "@iconify/react";

class VideoCard extends React.Component {
  render(props) {
    return (
      <div className='relative w-[390px] h-[500px] pb-3 flex flex-col justify-end '>
        <div className='w-[390px] h-[500px] absolute top-0 left-0'>
          <video
            muted
            loop
            autoPlay
            src={this.props.video}
            className='w-full h-full object-cover rounded-lg'
          ></video>
        </div>
        <div className='bg-slate-100 p-2 gap-5 flex mx-5  w-[full] rounded-md relative z-10'>
          <img
            src={this.props.img}
            alt=''
            width='50px'
            className='rounded-md object-cover'
          />
          <div>
            <div className='flex text-xs gap-1 '>
              <Icon icon='material-symbols:star' className='text-sm' />
              <h1 className='text-sm'>{this.props.rating}</h1>
              <h1 className='text-sm'>({this.props.review})</h1>
              <h1 className='text-sm'>{this.props.gap}</h1>
            </div>
            <h1 className='text-md font-bold'>{this.props.title}</h1>
            <h1 className='text-xs'>Hosted by {this.props.hosted}</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoCard;
