import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { SliderItem } from "../../src/data";
import { useState } from "react";

const Slider = () => {
  const [SlideIndex, setSlideIndex] = useState(0);

  const slideHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(SlideIndex > 0 ? SlideIndex - 1 : SliderItem.length - 1);
    } else {
      setSlideIndex(SlideIndex < SliderItem.length - 1 ? SlideIndex + 1 : 0);
    }
  };

  return (
    <div className="relative flex items-center justify-center overflow-hidden h-[100vh] w-[100vw]">
      <div
        onClick={() => slideHandler("left")}
        className="bg-blue-50 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer absolute top-64 left-5 z-50"
      >
        <ArrowLeft />
      </div>

      {/* Wrapper slider */}
      <div
        style={{
          transform: `translateX(${SlideIndex * -100}vw)`,
          width: `${SliderItem.length * 100}vw`,
        }}
        className="h-full flex"
      >
        {SliderItem.map((item, index) => (
          <div
            key={index}
            className={`h-full w-[100vw] flex bg-${item.color}`}
          >
            <div className="h-full w-1/2 px-24">
              <img
                src={item.image}
                alt=""
                className="h-[85%] w-[80%] object-cover"
              />
            </div>
            <div className="w-1/2 flex flex-col gap-10 items-start py-52">
              <h1 className="text-7xl font-bold">{item.title}</h1>
              <p className="font-thin text-2xl w-[90%]">
                {item.description}
              </p>
              <button className="bg-transparent py-3 px-4 rounded text-xl font-semibold border shadow">
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

      <div
        onClick={() => slideHandler("right")}
        className="bg-blue-50 h-12 w-12 rounded-full flex items-center justify-center cursor-pointer absolute top-64 right-5 z-50"
      >
        <ArrowRight />
      </div>
    </div>
  );
};

export default Slider;
