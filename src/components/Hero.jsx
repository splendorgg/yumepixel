import { curve, heroBackground } from "../assets"
import robot2 from "../assets/hero/robot2.png"
import Button from "./Button"
import Section from "./Section"
import { heroIcons } from "../constants"
import { ScrollParallax } from "react-just-parallax"
import { Gradient } from "./design/Hero"
import Generating from "./Generating"

const Hero = () => {
    return (
        <Section className="pt-[12rem] -mt-[5.25rem]" crosses crossesOffset="lg:translate-y-[5.25rem]" customPaddings id="hero" >
            <div className="container relative">
                <div className="mx-auto relative z-1 text-center max-w-[62rem] mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
                    <h1 className="h1 mb-6">Experience seamless AI-driven conversations with  {` `}
                        <span className="relative">YumePixel{" "}
                            <img src={curve} alt="curve" width={624} height={28} className="absolute left-0 xl:-mt-2" />
                        </span>
                    </h1>
                    <p className="body-1 max-w-3xl mx-auto text-n-2 mb-6 lg:mb-8">
                        Redefine productivity with AI-powered interactions. YumePixel brings intelligent chat to your fingertips.
                    </p>
                    <Button href="/pricing" white >
                        Get started
                    </Button>
                </div>
                <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
                    <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
                        <div className="relative bg-n-8 rounded-[1rem]">
                            <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />
                            <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
                                <img src={robot2} alt="robot" width={1024} height={490} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]" />
                                <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />
                                <ScrollParallax isAbsolutelyPositioned  >
                                    <ul className="hidden xl:flex absolute bottom-[7.5rem] -left-[5.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl">
                                        {heroIcons.map((icon, index) => (
                                            <li key={index} className="p-5">
                                                <img src={icon} alt="icon" width={24} height={25} />
                                            </li>
                                        ))}
                                    </ul>

                                </ScrollParallax>

                            </div>
                        </div>
                        <Gradient />
                    </div>

                    <div className="absolute -top-[54%] left-1/2 -translate-x-1/2 w-[234%] md:-top-[46%] md:w-[138%] lg:-top-[104%]">
                        <img src={heroBackground} alt="bg-robot" className="w-full" width={1440} height={1880} />
                    </div>
                </div>

            </div>
        </Section>
    )
}

export default Hero