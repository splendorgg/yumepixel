import ButtonSvg from "../assets/svg/ButtonSvg";
const Button = ({ className, children, white, px, onClick }) => {
    const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1  ${px || "px-7"
        } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;
    return (
        <button onClick={onClick} className={classes} >
            <span className="relative z-10">{children}</span>
            {ButtonSvg(white)}
        </button>
    )
}

export default Button