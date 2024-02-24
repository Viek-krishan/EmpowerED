import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-black text-white p-5 w-[99vw] flex justify-evenly ">
      <section className="logo">
        <img src="#" alt="Logo" />
        <h3>@ 2023 Bundle Technologies Pvt. Ltd</h3>
      </section>
      <section className="Company flex flex-col">
        <h2 className="text-lg font-semibold cursor-default">Company</h2>
        <Link to="#" className="m-2">About</Link>
        <Link to="#" className="m-2 text-sm font-extralight">Team</Link>
        <Link to="#" className="m-2 text-sm font-extralight">Careers</Link>
        <Link to="#" className="m-2 text-sm font-extralight">Developer</Link>
      </section>
      <section className="contact us flex flex-col">
        <h2 className="text-lg font-semibold cursor-default">Contact us</h2>
        <Link to="#" className="m-2 text-sm font-extralight">Help & Support </Link>
        <Link to="#" className="m-2 text-sm font-extralight">Partner with us</Link>
        <Link to="#" className="m-2 text-sm font-extralight">Ride with us</Link>
      </section>
      <section className="Delivery flex flex-col">
        <h2 className="text-lg cursor-default">Our service is available for all over India</h2>
        <h2 className="text-lg cursor-default">Best Tuter from all over world and for every one... </h2>
      </section>
    </div>
  );
};

export default Footer;
