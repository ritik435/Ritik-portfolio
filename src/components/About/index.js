import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import { library } from '@fortawesome/fontawesome-svg-core'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faReact, faHtml5, faJava, faJsSquare, faGitAlt, fa } from '@fortawesome/free-brands-svg-icons'
import { faFlag } from '@fortawesome/free-regular-svg-icons';
import LogoSvelte from '../../assets/images/svelte.png'
import { Loader } from 'react-loaders';
const About = () => {
    library.add(faReact, faHtml5, faJava, faFlag, faJsSquare,)
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        const myFunc = () => { setTimeout(() => { setLetterClass('text-animate-hover') }, 4000) }
        myFunc();
    }, [])
    return (
        <>
            <div className='container about-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} indx={15} />
                    </h1>

                    <p>
                        I'm very ambitious full-stack developer looking for a role in
                        established IT company with the opportunity to work with the latest
                        technologies on challenging and diverse projects.
                    </p>
                    <p>
                        I'm quietly confident,naturally curious,and perpetually working on
                        improving my chops one design problem atatime.
                    </p>
                    <p>
                        An ambitious problem solver with a passion for online businesses who would join a team of like-minded developers. A full stack developer and consistency in improving with new skills and techniques. Seeking an entry-level opportunity with an esteemed organization where I can utilize my skills and enhance learning in field of work
                    </p>
                </div>
                <div className='stage-cube-cont'>
                    <div className='cubespinner'>

                        <div className='face1'>
                            <FontAwesomeIcon icon={faReact} />
                        </div>
                        <div className='face2'>
                            <FontAwesomeIcon icon={faHtml5} />
                        </div>
                        <div className='face3'>
                            <img src={LogoSvelte} />
                        </div>
                        <div className='face4'>
                            <FontAwesomeIcon icon={faJava} />

                        </div>
                        <div className='face5'>
                            <FontAwesomeIcon icon={faJsSquare} />
                        </div>
                        <div className='face6'>
                            <FontAwesomeIcon icon={faGitAlt} />
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}


export default About;