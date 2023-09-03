import React from 'react';
import "./RedirectionBar.css"
import { useNavigate } from 'react-router-dom';
const RedirectionBar = (props) => {
    const navigate = useNavigate();
    const {to, delay = 5000} = props;
    
    React.useEffect(() => {
        setTimeout(() => {
            if(!to) return null;
            navigate(to);
        }, delay)
    }, [])
    if(!to) return null;
    return (
        <div className='redirection-bar'>

        </div>
    )
}

export default RedirectionBar;
