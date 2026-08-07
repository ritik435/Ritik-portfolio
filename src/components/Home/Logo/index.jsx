import './index.scss'
import LogoS from "../../../assets/images/Asset 7.png"
import { useRef } from 'react';
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

