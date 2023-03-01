import FooterCol from "./FooterCol";
import "./Footer.css";
const DUMMY_FOOTER_LINK = [
  { h2: "", p: [] },
  {
    h2: "CUSTOMER SEVICES",
    p: [
      "Help & Contact Us",
      "Return & Refunds",
      "Online Stores",
      "Term & Conditions",
    ],
  },
  {
    h2: "COMPANY",
    p: ["What We Do", "Avaiable Services", "Lastest Posts", "FAQs"],
  },
  {
    h2: "SOCIAL MEDIA",
    p: ["Twitter", "Instagram", "Facebook", "Pinteres"],
  },
  { h2: "", p: [] },
];

const Footer = () => {
  return (
    <div className="layout_footer">
      {DUMMY_FOOTER_LINK.map((d) => (
        <FooterCol
          key={Math.random()}
          h2={d.h2}
          p={d.p}
          className="layout_col"
        />
      ))}
    </div>
  );
};
export default Footer;
