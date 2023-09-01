import React from 'react';
import "./RedirectionBar.css"
import { useNavigate } from 'react-router-dom';
const RedirectionBar = (props) => {
    const navigate = useNavigate();
    const {to} = props;
    
    React.useEffect(() => {
        setTimeout(() => {
            if(!to) return null;
            navigate(to);
        }, 3000)
    }, [])
    if(!to) return null;
    return (
        <div className='redirection-bar'>

        </div>
    )
}

export default RedirectionBar;
