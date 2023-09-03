import React, { useContext } from 'react';
import './thankyou.css';
import Lock from '../assets/shoppingBag.png';
import UserContext, { EMPTY_USER } from '../../context/userContext';
import RedirectionBar from '../RedirectionBar/RedirectionBar';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { CONFETI, SNOW } from '../../utils/particlePresets';
function ThankYou() {
    const { setUser } = useContext(UserContext);

    React.useEffect(() => {
        setUser(EMPTY_USER);
    }, []);

    const particlesInit = async (main) => {
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets 
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready 
        // starting from v2 you can add only the features you need reducing the bundle size 
        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };

    return (
        <>
            <RedirectionBar
                to={'/'}
            />
            <div className='container background-image thank-you-container'>
                <h2 className='heading-content'>Thanks for participating!</h2>
                <p className='sub-content'>Our teams's here to help you learn more about our network.</p>
                <h3 className='prize-content'>P.S: Don't leave without your prize!</h3>
                <img src={Lock} alt='lock' className='lock-img' />
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={CONFETI}
            />
        </>

    )
}

export default ThankYou
