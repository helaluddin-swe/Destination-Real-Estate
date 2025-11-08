import { ArrowLeft, ArrowRight, X } from "lucide-react";
import "./Slider.scss";
import { useState } from "react";

const Slider = ({ image }) => {
  const [imageIndex, setImageIndex] = useState(null);

  const changeSlide = (direction) => {
    if (direction === "left") {
      if (imageIndex === 0) {
        setImageIndex(image.length - 1)
      }
      else {
        setImageIndex(imageIndex - 1)
      }
    } else {
      if (imageIndex === image.length - 1) {
        setImageIndex(0)
      }
      else {
        setImageIndex(imageIndex + 1)
      }
    }

  }

  return (
    <div className="slider">
      {/* Main image */}
      <div className="bigImg">
        <img src={image[0]} alt="big" onClick={() => setImageIndex(0)} />
      </div>

      {/* small image */}
      <div className="smallImg">
        {image.slice(0, 3).map((img, index) => (
          <img
            src={img}
            alt="image"
            key={index}
            onClick={() => setImageIndex(index )}
          />
        ))}
      </div>

      {/* Fullscreen view */}
      {imageIndex !==null && (
        <div className="fullSlider">
          <div className="arrowleft" onClick={() => changeSlide("left")}>
            <ArrowLeft size={50} />
          </div>

          <div className="imgContainer">
            <img src={image[imageIndex]} alt="slider" />
          </div>

          <div className="arrowright" onClick={() => changeSlide("right")}>
            <ArrowRight size={50} />
          </div>

          <div className="close" onClick={() => setImageIndex(null)}>
            <X size={32} />
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Slider;
