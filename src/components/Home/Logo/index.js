import './index.scss'
import LogoS from "../../../assets/images/Asset 7.png"
import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
const Logo = () => {
    const bgRef = useRef();
    const outlineLogoRef = useRef();
    const solidLogoRef = useRef();
    return (
        <div className='logo-container'>
            {/* <img ref={solidLogoRef} src={LogoS} className="solid-logo" alt="R" /> */}

        </div>
    )
}

export default Logo;

