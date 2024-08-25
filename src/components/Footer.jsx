import React from 'react';
import { ImFacebook2 } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaDribbbleSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='lg:flex lg:justify-between p-8 space-y-8 lg:space-y-0 lg:space-x-8 text-white bg-gray-900'>
            <div className='space-y-5 lg:w-[30%]'>
                <h1 className='text-3xl font-bold text-[#00df9a] w-full'>REACT.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed bibendum
                    massa. Aenean consequat, turpis a iaculis malesuada, tellus libero
                    malesuada tellus, sed tristique lacus lectus nec velit. Curabitur eget
                    nulla odio. Suspendisse id lectus nec est rhoncus placerat vitae a nisl.
                    Mauris sed risus ante. Aliquam faucibus ac risus et tristique.
                </p>
                <div className='flex justify-between max-w-[200px]'>
                    <ImFacebook2 size={30} />
                    <FaInstagramSquare size={30} />
                    <FaTwitter size={30} />
                    <FaGithub size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:w-[70%]'>
                <div>
                    <h2 className='font-bold mb-4'>Solutions</h2>
                    <ul>
                        <li className='py-2'>Analytics</li>
                        <li className='py-2'>Marketing</li>
                        <li className='py-2'>Commerce</li>
                        <li className='py-2'>Insights</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold mb-4'>Support</h2>
                    <ul>
                        <li className='py-2'>Pricing</li>
                        <li className='py-2'>Documentation</li>
                        <li className='py-2'>Guides</li>
                        <li className='py-2'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold mb-4'>Company</h2>
                    <ul>
                        <li className='py-2'>About</li>
                        <li className='py-2'>Blog</li>
                        <li className='py-2'>Jobs</li>
                        <li className='py-2'>Press</li>
                        <li className='py-2'>Careers</li>
                    </ul>
                </div>
                <div>
                    <h2 className='font-bold mb-4'>Legal</h2>
                    <ul>
                        <li className='py-2'>Claims</li>
                        <li className='py-2'>Policies</li>
                        <li className='py-2'>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
