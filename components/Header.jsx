import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-pink-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="logo cursor-pointer font-bold text-4xl text-orange">Prodat ⭐️</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-orange ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
          <Link href="http://www.prodatweb.com/"><a className="md:float-right mt-2 align-middle text-pink-600 ml-4 font-semibold cursor-pointer">Visit Prodat Community 🚀</a></Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
