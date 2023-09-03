import React, { useContext } from 'react';
import './thankyou.css';
import Lock from '../assets/shoppingBag.png';
import UserContext, { EMPTY_USER } from '../../context/userContext';
import RedirectionBar from '../RedirectionBar/RedirectionBar';
import { CONFETI } from '../../utils/particlePresets';
import ParticlesComponent from '../Particles/ParticlesComponent';

function ThankYou() {
    const { setUser } = useContext(UserContext);

    React.useEffect(() => {
        setUser(EMPTY_USER);
    }, []);


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
            <ParticlesComponent
                particlePreset={CONFETI}
            />
        </>

    )
}

export default ThankYou
