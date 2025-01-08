import React from 'react';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/aljayve20" target="_blank" rel="fb page">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/aljayve-capara-398185260/" target="_blank" rel="LinkendIn page">
        <BsLinkedin />
      </a>
    </div>
  </div>
);

export default SocialMedia;
