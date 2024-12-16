import "./services.css";
import ComputerModalContainer from "./Computer/ComputerModalContainer.jsx";
import PsModalContainer from "./ps5/psModalContainer.jsx";
import MugModalContainer from "./mug/MugModalContainer.jsx";

const services = [
  { id: 1, image: "./service1.png", title: "Web Development", counter: 50 },
  { id: 2, image: "./service2.png", title: "Product Design", counter: 15 },
  { id: 3, image: "./service3.png", title: "Branding", counter: 58 },
];

const Services = () => {
  return (
    <div className="service">
      <div className="sService left">
        <div className="serviceList">
          <h1 className="sTitle">How do I help</h1>
          {services.map((service) => (
            <div className="section" key={service.id}>
              <div className="serviceIcon">
                <img src={service.image} alt="img" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.Branding}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="sService right">
        <PsModalContainer />
        <ComputerModalContainer className="MacBook" />
        <MugModalContainer />
      </div>
    </div>
  );
};

export default Services;
