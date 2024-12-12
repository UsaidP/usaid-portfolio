import "./services.css";
import ComputerModalContainer from "./Computer/ComputerModalContainer.jsx";

const Services = () => {
  return (
    <div className='service'>
      <div className='sService left'></div>
      <div className='sService right'>
        <ComputerModalContainer />
      </div>
    </div>
  );
};

export default Services;
