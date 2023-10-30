import { useEffect, useState } from "react";
import SectionTitle from "../../../shared/SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";

const Services = () => {
   const [loadedServices, setLoadedServices]=useState([])
   useEffect(()=>{
      fetch("https://car-doctor-server-eta-drab.vercel.app/services")
      .then(res=>res.json())
      .then(data=>{
         setLoadedServices(data);
      })
   },[])
   return (
      <section className="my-32">
         <SectionTitle title={"Services"} largeTitle={"Our Service Area"} subTitle={"The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "}></SectionTitle>
         <div className="mt-12 grid grid-cols-3 gap-5">
            {
               loadedServices.map(service=><ServiceCard key={service._id} service={service}></ServiceCard>)
            }
         </div>
      </section>
   );
};

export default Services;