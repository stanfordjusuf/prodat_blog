import React from 'react';
import Link from 'next/link';

const Footer = () => (
  <div className="footer">
    <center>
      <p>Website made by Stanford, a Prodat Full-Stack Developer 🧑🏻‍💻</p>
      <Link href="https://www.instagram.com/project_prodat/?hl=en"><p className="text-pink-600 cursor-pointer">Visit our Instagram ❤️</p></Link>
    </center>
  </div>
);

export default Footer;
