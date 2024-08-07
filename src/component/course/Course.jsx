import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import API_ROUTE from "../../../config";

function Course() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  const filterData = async () => {
    try {
      const response = await axios.get(`${API_ROUTE}/book`);
      setBooks(response?.data);
    } catch (error) {
      console.error("Error fetching books:", error);
      setError(error.message);
    }
  };

  useEffect(() => {
    filterData();
  }, []);

  return (
    <>
      <div className="max-w-screen-xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          {error ? (
            <div className="col-span-4 text-center text-red-500">
              Error: {error}
            </div>
          ) : (
            books?.map((item) => <Card key={item.id} items={item} />)
          )}
        </div>
      </div>
    </>
  );
}

export default Course;
