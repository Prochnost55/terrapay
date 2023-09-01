import React, { useContext } from 'react';
import './thankyou.css';
import Lock from '../assets/Group 174.png';
import UserContext, { EMPTY_USER } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import RedirectionBar from '../RedirectionBar/RedirectionBar';

function ThankYou() {
    const { user, setUser } = useContext(UserContext);
    React.useEffect(() => {
        setUser(EMPTY_USER);
    }, [])
    return (
        <>
            <RedirectionBar to={'/'}/>
            <div className='container background-image thank-you-container'>
                <h2 className='heading-content'>Thanks for participating!</h2>
                <p className='sub-content'>Our teams's here to help you learn more about our network.</p>
                <h3 className='prize-content'>P.s: Don't leave without your prize!</h3>
                <img src={Lock} alt='lock' className='lock-img' />
            </div>
        </>

    )
}

export default ThankYou
