import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";

const Booked = () => {
  const { user } = useContext(AuthContext);
  const [loadedBookings, setLoadedBookings] = useState([]);

  const url=`http://localhost:3000/bookings?userEmail=${user.email}`
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLoadedBookings(data);
      });
  }, [url]);

  const handleDelete = (_id) => {
    fetch(`http://localhost:3000/bookings/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount >0) {
         const remaining= loadedBookings.filter(item=>item._id !== _id)
         setLoadedBookings(remaining)
        }
      });
  };
  const handleBookingConfirm=(id)=>{
    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({status:"confirmed"})
    })
      .then((res) => res.json())
      .then(data=>{
        if (data.modifiedCount>0) {
          const remainingItem=loadedBookings.filter(item=>item._id !== id);
          const modifiedItem=loadedBookings.find(item=>item._id === id)
          modifiedItem.status="confirmed";
          const updatedData=[modifiedItem,...remainingItem]
          setLoadedBookings(updatedData)
        }
      })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loadedBookings.map((booked) => (
              
              <tr key={booked._id}>
                <td>
                  <img className="max-w-[300px]" src={booked.img} alt="" />
                </td>
                <td>{booked.title}</td>
                <td>{booked.price}</td>
                <td>
                  {
                    booked.status ? <span className="font-semibold text-white bg-pink-500 inline-block p-2 rounded-lg uppercase">Confirmed</span>:
                    <button onClick={()=>handleBookingConfirm(booked._id)} className="btn btn-sm bg-pink-200">Please Confirm</button>
                  }
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(booked._id)}
                    className="btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Booked;
