import { useLoaderData } from "react-router-dom";

const ServiceDetails = () => {
   const loadedService = useLoaderData()
   const {_id,title,img,price,description}=loadedService;
   return (
      <div>
         <img src={img} alt="" />
         <h2>{title}</h2>
         <strong>{price}</strong>
         <p>{description}</p>
         <button className="btn my-5 bg-[#ff3811] text-white">Book Now</button>
      </div>
   );
};

export default ServiceDetails;