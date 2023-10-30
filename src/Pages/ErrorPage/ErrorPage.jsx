import { useRouteError } from "react-router-dom";
import errorImg from "../../assets/images/error/error.png";
import Header from "../shared/Header/Header";
const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="container mx-auto" >
      <Header></Header>
      {error.status === 404 && (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <img src={errorImg} alt="Error Image" />
          <div className="mt-10">
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
