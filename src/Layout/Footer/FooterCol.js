import "./FooterCol.css";
const FooterCol = (props) => {
  const classes = `footercol ${props.className}`;
  return (
    <div className={classes}>
      <h2>{props.h2}</h2>
      {props.p.map((p) => (
        <a key={Math.random()} href="#" className="footer_a">
          {p}
        </a>
      ))}
    </div>
  );
};
export default FooterCol;
