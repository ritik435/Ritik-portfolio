import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import LogoTitle from "../../assets/images/Asset 7.png";
import AnimatedLetters from '../AnimatedLetters';
import '../AnimatedLetters/index.scss'
import './index.scss'
import Logo from './Logo/index.js'
import { Loader } from 'react-loaders'
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['i', 't', 'i', 'k'];
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
    useEffect(() => {
        const myFunc = () => { setTimeout(() => { setLetterClass('text-animate-hover') }, 4000) }
        myFunc();
    }, [])


    return (
        <>
            <div className="container home-page">
                <div className='text-zone'>

                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i</span>

                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray}
                            indx={15} />

                        <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray}
                            indx={19} />
                    </h1>
                    <h2>Full Stack Developer </h2>
                    <Link to="/contact" className="flat-button">CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Home;