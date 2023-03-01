import "./Service.css";
const Service = (props) => {
  return (
    <div className="services_container">
      <h4>{props.data.h4}</h4>
      <p>{props.data.p}</p>
    </div>
  );
};
export default Service;
