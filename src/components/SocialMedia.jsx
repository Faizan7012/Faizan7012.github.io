import React from "react";
import { BsInstagram } from "react-icons/bs";
import { GoMarkGithub } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a target='_blank' href="https://github.com/Faizan7012">
        <GoMarkGithub />
      </a>
    </div>
    <div>
      <a target='_blank' href="https://www.facebook.com/profile.php?id=100049967062886">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a  target='_blank' href="https://www.instagram.com/frtoons07/">
        <BsInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
