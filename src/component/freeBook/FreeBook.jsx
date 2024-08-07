import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTE from "../../../config";

export default function FreeBook() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const filterData = async () => {
    try {
      const response = await axios.get(`${API_ROUTE}/book`);
      const filterData = await response.data.filter((data) => {
        return data?.category === "free";
      });
      setBooks(filterData);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
    }
  };
  useEffect(() => {
    filterData();
  }, []);

  var settings = {
    dots: false,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="md:mx-20 px-4 py-24 overflow-hidden">
      <div>
        <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
          veritatis alias pariatur ad dolor repudiandae eligendi corporis nulla
          non suscipit, iure neque earum?
        </p>
      </div>
      {error ? (
        <div className="text-red-500">Error: {error}</div>
      ) : (
        <div>
          <Slider {...settings}>
            {books?.map((book) => (
              <Card key={book._id} items={book} />
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
}
