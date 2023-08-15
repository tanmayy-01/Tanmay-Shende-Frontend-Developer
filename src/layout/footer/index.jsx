import React from 'react';
import bgImageFilter from '../../assets/Hero/BgImage3.jpg'
import Logo from '../../assets/Logo/logo.png'

const Footer = () => {
    return (
        <footer data-testid="footer" className="bg-black text-white py-1 bg-no-repeat bg-cover bg-fixed z-50 " style={{ backgroundImage: `url(${bgImageFilter})` }}   >
            <div className="container mx-auto flex flex-col items-center justify-center lg:flex-row">
                <div className="mb-0 mt-0 lg:m-8 lg:mr-8 ml-0">
                    <img
                        src={Logo}
                        alt="SpaceX Logo"
                        className="w-40 h-auto"
                    />
                </div>
                <div className="flex flex-col items-center lg:flex-row font-medium  lg:items-center lg:space-x-4">
                    <p>© 2023</p>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        TWITTER
                    </a>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        YOUTUBE
                    </a>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        LINKEDIN
                    </a>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        FLICKR
                    </a>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        INSTAGRAM
                    </a>
                    <a href="#" className="hover:text-gray-500 my-2 lg:my-0 lg:mx-2">
                        PRIVACY POLICY
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
