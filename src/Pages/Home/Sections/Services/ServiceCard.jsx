import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ServiceCard = ({service}) => {
   const {_id,title,img,price}=service;
   return (
      <div className="p-6 border rounded-xl">
         <img className="h-[300px] w-full rounded-lg object-cover" src={img} alt="service image" />
         <div>
         <h2 className="text-[#444444] capitalize text-2xl my-5 font-bold">{title}</h2>
         <p className="text-[#FF3811] mb-5 text-xl font-bold">Price : ${price}</p>
         <Link to={`/service/${_id}`}><button className="btn border-[#FF3811] text-[#FF3811] bg-transparent ">Book Now</button></Link>
         </div>
      </div>
   );
};
ServiceCard.propTypes={
   service:PropTypes.object
}
export default ServiceCard;