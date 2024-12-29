import { brainwave } from "../assets";
import { navigation } from "../constants";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../assets/svg/MenuSvg";
import Button from "./Button";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { useLocation } from "react-router-dom";
const Header = () => {
    const pathname = useLocation()
    const [openNavigation, setOpenNavigation] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false)
            enablePageScroll();
        } else {
            setOpenNavigation(true)
            disablePageScroll();
        }
    }
    const handleClick = () => {
        if (!openNavigation) return;
        enablePageScroll();
        setOpenNavigation(false);
    }

    return (
        <div className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
                <a className="block w-[12rem] xl:mr-8" href="#hero">
                    <img src={brainwave} width={190} height={40} alt="Brainwave" />
                </a>
                <nav className={`${openNavigation ? "flex" : "hidden"}  fixed top-[5rem] left-0 right-0 bottom-0 lg:static lg:flex-row   lg:flex lg:mx-auto bg-n-8 lg:bg-transparent`}>
                    <div className=" relative z-2 m-auto flex flex-col lg:flex-row justify-center items-center ">
                        {navigation.map((item) => (
                            <a
                                className={`${item.onlyMobile ? "lg:hidden" : ""} whitespace-nowrap cursor-pointer text-2xl  px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold lg:px-8 uppercase font-code text-n-1  lg:text-n-1/50 transition-colors hover:text-color-1 lg:hover:text-n-1
                                    ${item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-1/50"}`}
                                href={item.url}
                                key={item.id}
                                onClick={handleClick}
                            >
                                {item.title}
                            </a>
                        ))}
                    </div>
                    <HamburgerMenu />
                </nav>
                <a className="button hidden lg:block mr-8 text-n-1/50 hover:text-n-1 transition-colors whitespace-nowrap" href="">New Account</a>
                <Button className="hidden lg:flex">Sign in</Button>
                <Button onClick={toggleNavigation} className="lg:hidden ml-auto" px="px-3">
                    <MenuSvg />
                </Button>
            </div>
        </div>


    )
}

export default Header