import "../styles/ProjectsCarousel.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/ProjectsCarousel.css";

//images
import cvAplication from "../assets/cv_aplication.png";
import restaurant from "../assets/restaurant.png";
import hashMap from "../assets/hashmap.png";
import mergeSort from "../assets/mergesort.png";

const images = [cvAplication, restaurant, hashMap, mergeSort];

export default function ProjectsCarousel() {
  return (
    <div className="box">
      <Carousel useKeyboardArrows={true}>
        {images.map((URL, index) => (
          <div className="slide">
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
