import { BsInstagram } from "react-icons/bs";
import {SiLinkedin} from 'react-icons/si'
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import "./Footer.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Footer = () => {
  AOS.init()
 

  return (
    <>
      <h2 className="head-text" data-aos="fade-right">Take a coffee & chat with me</h2>

      <div className="app__footer-cards" data-aos="fade-right">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a target='_blank' href="mailto:faizanst077@gmail.com" className="p-text">
             faizanst077@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a target='_blank' href="tel:+91 7012241785" className="p-text">
            +91 7012241785
          </a>
        </div>
      </div><br /><br /><br />
       <div>
       <h2 className="head-text" data-aos="fade-right">Get In Touch</h2><br /><br /><br />
      <div className="app__social_2"  data-aos="fade-right">
     <div data-aos="fade-right">
      <a className="soc-1-icon" target='_blank' href="https://github.com/Faizan7012">
        <GoMarkGithub />
      </a>
    </div>
    <div data-aos="fade-right">
      <a className="soc-2-icon" target='_blank' href="https://www.facebook.com/profile.php?id=100049967062886">
        <FaFacebookF />
      </a>
    </div>
    <div data-aos="fade-right">
      <a className="soc-3-icon" target='_blank' href="https://www.instagram.com/frtoons07/">
        <BsInstagram />
      </a>
    </div>
    <div data-aos="fade-right">
      <a className="soc-4-icon" target='_blank' href="https://www.linkedin.com/in/faizan7012">
        <SiLinkedin />
      </a>
    </div>
    </div>
          </div>
          <br />
          <br />
          <br />


          <h3 class="footer-love">Made with<span className="footer_heart"> ❤ </span>By Faizan Alam</h3>

    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
