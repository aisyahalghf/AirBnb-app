import React from "react";
import { Icon } from "@iconify/react";
import { useParams } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import VideoCard from "../components/VideoCard";
import HeadingSearchPage from "../components/HeadingSearchPage";
import GoogleMapReact from "google-map-react";
import ImageCardSecondary from "../components/ImageCardSecondary";

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}
class SearchPage extends React.Component {
  state = {
    country: "nearby",
    date: "anytime",
    guest: "add",
    center: "",
    dataSelected: "",
    visible: false,
  };

  componentDidMount() {
    const { country, guest, date } = this.props.params;
    this.setState({ country, guest, date });
    const center = { lat: experiences[0].lat, lng: experiences[0].long };
    this.setState({ center: center });
  }

  showSuggestion = () => {
    const suggestions = experiences.filter(
      (item) => item.rating > 4 && item.status === "available"
    );
    return suggestions.map((item) => (
      <div>
        <ImageCard
          image={item.image}
          rating={item.rating}
          gap={item.gap}
          review={item.review}
          title={item.name}
          price={item.price}
        />
      </div>
    ));
  };

  showExperiences = () => {
    const allData = experiences.filter((item) => item.status === "available");
    return allData.map((item) => (
      <div>
        <ImageCard
          image={item.image}
          rating={item.rating}
          gap={item.gap}
          review={item.review}
          title={item.name}
          price={item.price}
        />
      </div>
    ));
  };

  showHosted = () => {
    const hosted = experiences.filter(
      (item) =>
        item.category === "hosted by locals" && item.status === "available"
    );
    return hosted.map((item) => {
      return (
        <div>
          <VideoCard
            review={item.review}
            hosted={item.hosted}
            gap={item.location}
            video={item.video}
            img={item.image}
            title={item.name}
            rating={item.rating}
          />
        </div>
      );
    });
  };

  onMarkerClick = (id, lat, long) => {
    // const center = { lat: lat, long: long };
    // this.setState({ center });
    const [selected] = experiences.filter((item) => item.id === id);
    this.setState({ dataSelected: selected });
  };

  showIcon = (category) => {
    if (category === "restaurant") {
      return <Icon icon='icon-park-twotone:fork-spoon' color='black' />;
    } else if (category === "Entertaiment") {
      return <Icon icon='fa6-solid:masks-theater' color='black' />;
    } else if (category === "Hosted by locals") {
      return <Icon icon='mdi:human-walk' color='black' />;
    } else {
      return <Icon icon='la:hotel' color='black' />;
    }
  };

  showMap = () => {
    return experiences.map((item) => {
      return (
        <div
          key={item.id}
          lat={item.lat}
          lng={item.long}
          className=' text-white bg-white cursor-pointer border p-2 w-fit rounded-full'
          onClick={() => this.onMarkerClick(item.id, item.lat, item.long)}
        >
          {this.showIcon(item.category)}
        </div>
      );
    });
  };

  handleApiLoaded = (map, maps) => {
    console.log(map);
    console.log(maps);
  };

  render() {
    const dataSelected = this.state.dataSelected;
    return (
      <section className='container mx-auto mt-10'>
        <HeadingSearchPage
          country={this.state.country}
          guest={this.state.guest}
          date={this.state.date}
        />

        <div hidden={!this.state.visible}>
          <div className=' h-screen  w-[100%] mt-5  '>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_API_KEY,
              }}
              // yesIWantToUseGoogleMapApiInternals
              // onGoogleApiLoaded={({ map, maps }) =>
              //   this.handleApiLoaded(map, maps)
              // }
              defaultCenter={this.state.center}
              defaultZoom={13}
            >
              {this.showMap()}
            </GoogleMapReact>
          </div>
        </div>

        <div hidden={this.state.visible}>
          <div className=' flex flex-col gap-10'>
            <div className='flex-col gap-5'>
              <h2 className=' font-semibold text-xl md:text-3xl mt-4 mb-5 text-center mx-5 xl:mx-0'>
                Unforgettable activities hosted by locals
              </h2>
              <div className='flex overflow-x-auto w-[full] gap-3 rounded-lg'>
                {this.showHosted()}
              </div>
            </div>

            <div className='flex w-full flex-col gap-5 px-5 md:px-0'>
              <h1 className=' font-semibold text-lg md:text-3xl '>
                Experience you might like
              </h1>
              <div className='flex overflow-x-auto w-[full] gap-3 rounded-lg'>
                {this.showSuggestion()}
              </div>
            </div>

            <div className='flex w-full flex-col gap-5 px-5 md:mx-0'>
              <h1 className='font-semibold text-lg md:text-3xl'>
                All Experiences
              </h1>
              <div className=' grid grid-cols-2 md:grid-cols-3 pl-5'>
                {this.showExperiences()}
              </div>
            </div>
          </div>
          <div
            onClick={() => this.setState({ visible: true })}
            className=' fixed mb-5 bottom-0 flex left-1/3 md:left-[570px] items-center bg-black gap-2 py-2 rounded-3xl w-fit px-5 hover:cursor-pointer'
          >
            <h1 className=' text-white md:text-4xl'>Map</h1>
            <Icon
              icon='arcticons:openmaps'
              color='white'
              className=' md:text-3xl'
            />
          </div>
        </div>

        <div className={this.state.dataSelected ? "visible" : "invisible"}>
          <ImageCardSecondary
            img={dataSelected.image}
            rating={dataSelected.rating}
            review={dataSelected.review}
            gap={dataSelected.gap}
            title={dataSelected.name}
            price={dataSelected.price}
          />
        </div>
      </section>
    );
  }
}

export default withParams(SearchPage);

const experiences = [
  {
    id: 1,
    rating: 4.88,
    review: 7600,
    gap: 3,
    category: "restaurant",
    image: "https://www.halaltag.com/images/photo/2673-photo.jpg",
    name: "PASTAMANIA",
    price: "$53",
    status: "available",
    country_id: 1,
    lat: 43.7731,
    long: 11.255,
  },
  {
    id: 2,
    rating: 4.94,
    review: 2132,
    gap: 2,
    category: "Entertaiment",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/48/2f/be/caption.jpg?w=300&h=300&s=1",
    name: "Skip the line with Elvis, Love the David",
    price: "$38",
    status: "available",
    country_id: 1,
    lat: 43.7696,
    long: 1.2558,
  },
  {
    id: 3,
    rating: 4.9,
    review: 3217,
    gap: 3,
    category: "hosted by locals",
    video:
      "https://drive.google.com/uc?export=view&id=1KKypIrMoDs4dB0Bo8cvdNfEx2VpQnS6t",
    image:
      "https://www.discoveripswich.com.au/wp-content/uploads/llama-farm-ponies.jpg",
    name: "My FARM THEREE EXPERIENCE",
    price: "$52",
    status: "available",
    country_id: 1,
    hosted: "Simons Alex",
    location: "Italy",
    lat: 43.7677,
    long: 11.2539,
  },
  {
    id: 4,
    rating: 4.91,
    review: 2237,
    gap: 2,
    category: "Education",
    image:
      "https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_1000,q_50,w_1150/v1/clients/kamloops/Main_Button_Images_9__99c1d134-654f-4258-9d7d-586c36f2da60.jpg",
    name: "Tuscan Winemaker",
    price: "$103",
    status: "available",
    country_id: 1,
    lat: 43.7626,
    long: 11.249,
  },
  {
    id: 5,
    rating: 2,
    review: 2237,
    gap: 2,
    category: "Entertaiment",
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-4475950-media_library/original/5c6d6a34-844f-421e-a50a-0552b65a10f0.jpg?im_w=720",
    name: "Amazing Professional Photo Tour in Rome",
    price: "$38",
    status: "available",
    country_id: 1,
    lat: 43.7696,
    long: 11.2553,
  },
  {
    id: 6,
    rating: 5,
    review: 2237,
    gap: 2,
    category: "Education",
    image:
      "https://aws-tiqets-cdn.imgix.net/images/content/cd04e7185f6647d484c12828a50e0ffb.jpeg?auto=format&fit=crop&h=800&ixlib=python-3.2.1&q=70&w=800&s=28200247bc928ec945b110deb58b1b7d",
    name: "Skip the Line-Colosseum Small",
    price: "$63",
    status: "closed",
    country_id: 1,
    lat: 43.7697,
    long: 11.2559,
  },
  {
    id: 7,
    rating: 3.91,
    review: 100,
    gap: 4,
    category: "Entertaiment",
    image:
      "https://www.romastarbike.com/wp-content/uploads/2021/05/Tour-sullAppia-Antica-in-e-bike-17.jpg",
    name: "Wake up Rome!!! Food-E-Bike Tour",
    price: "$63",
    status: "available",
    country_id: 1,
    lat: 43.7684,
    long: 11.2624,
  },
  {
    id: 8,
    rating: 4.87,
    review: 2237,
    gap: 2,
    category: "hosted by locals",
    video:
      "https://drive.google.com/uc?export=view&id=1jp43qH89MpFu3ohGbuLNxk3NIEf7DKq-",
    image:
      "https://a0.muscache.com/im/pictures/lombard/MtTemplate-189678-poster/original/573b0a9a-91bc-40c0-8cfd-3ff25c5dab2b.jpeg?im_w=720",
    name: "Outdoor Rome Pasta & Pizza Cooking",
    price: "$63",
    status: "available",
    country_id: 1,
    hosted: "Alex Ratata",
    location: "Italy",
    lat: 43.776,
    long: 11.2587,
  },
  {
    id: 9,
    rating: 3.1,
    review: 2237,
    gap: 2,
    category: "Entertaiment",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/24/cf/af/93/cheers.jpg?w=500&h=400&s=1",
    name: "Rome Nightlife Tour",
    price: "$30",
    status: "available",
    country_id: 1,
    lat: 43.7628,
    long: 11.2652,
  },
  {
    id: 10,
    rating: 4.91,
    review: 2237,
    gap: 2,
    category: "hosted by locals",
    video:
      "https://drive.google.com/uc?export=view&id=1dRWgP5M8sdqkrMT5XYGk99kPt927EtZA",
    image:
      "https://www.carpediemtours.com/wp-content/uploads/2023/09/Clients-Trying-Cheese-on-Rome-Trastevere-Food-Tour.jpg",
    name: "Flavours of Rome Food Tour",
    price: "$63",
    status: "available",
    country_id: 1,
    hosted: "Sabrina",
    location: "Italy",
    lat: 43.768,
    long: 11.2557,
  },
  {
    id: 11,
    rating: 1.5,
    review: 2237,
    gap: 2,
    category: "hosted by locals",
    video:
      "https://drive.google.com/uc?export=view&id=1otXDZBS5IieapFMyfZwMtXdjELlnmGnk",
    image:
      "https://d3nxs1rvheu4jv.cloudfront.net/0c9bf000811d621b26f40b9f6f7d0adf/480x480/13843.jpg",
    name: "Handmade pasta with grandma",
    price: "$101",
    status: "available",
    country_id: 1,
    hosted: "Nancy",
    location: "Italy",
    lat: 43.7742,
    long: 11.2541,
  },
];
