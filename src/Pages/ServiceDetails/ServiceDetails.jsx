import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Authentication/AuthProvider";

const ServiceDetails = () => {
  const loadedService = useLoaderData();
  const { loading, user } = useContext(AuthContext);
  const { _id, title, img, price, description } = loadedService;

  const handleBookNow = () => {
    const bookingInfo = {
      userName: user.displayName,
      userEmail: user.email,
      userPhoto: user.photoURL,
      service_id: _id,
      title,
      img,
      price,
    };
    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingInfo),
    })
    .then(data=>{
      console.log(data);
      alert("Booked successfully")
    })
    .catch(error=>{
      console.log(error.message);
    })
  };
  return (
    <div>
      {loading ? (
        ""
      ) : (
        <>
          <img src={img} alt="" />
          <h2>{title}</h2>
          <strong>{price}</strong>
          <p>{description}</p>
          <button
            onClick={handleBookNow}
            className="btn my-5 bg-[#ff3811] text-white"
          >
            Book Now
          </button>
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
