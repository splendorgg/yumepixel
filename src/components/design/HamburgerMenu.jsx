import { background } from "../../assets"

const HamburgerMenu = () => {
    return (
        <div className="absolute inset-0 pointer-events-none lg:hidden">
            <div className="absolute inset-0 opacity-[.03]">
                <img src={background} alt="Background" className="w-full h-full object-cover" width={688} height={953} />
            </div>
        </div>
    )
}

export default HamburgerMenu