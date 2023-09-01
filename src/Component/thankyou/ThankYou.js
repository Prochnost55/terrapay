import React, { useContext } from 'react';
import './thankyou.css';
import Lock from '../assets/Group 174.png';
import UserContext, { EMPTY_USER } from '../../context/userContext';
import RedirectionBar from '../RedirectionBar/RedirectionBar';

import { tsParticles } from "https://cdn.jsdelivr.net/npm/tsparticles-engine/+esm";
import { loadFull } from "https://cdn.jsdelivr.net/npm/tsparticles/+esm";

function ThankYou() {
    const { user, setUser } = useContext(UserContext);
    React.useEffect(() => {
        setUser(EMPTY_USER);
        loadParticles(configs);
    }, [])
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
        </>

    )
}


async function loadParticles(options) {
  await loadFull(tsParticles);

  await tsParticles.load(options);
}

const totalDuration = 2 /* * 60 * 60*/,
  emittersLifeCount = totalDuration / 0.5;

const configs = {
  fullScreen: {
    zIndex: 1
  },
  particles: {
    number: {
      value: 0
    },
    color: {
      value: ["#00FFFC", "#FC00FF", "#fffc00"]
    },
    shape: {
      type: ["circle", "square"],
      options: {}
    },
    opacity: {
      value: 1,
      animation: {
        enable: true,
        minimumValue: 0,
        speed: 5,
        startValue: "max",
        destroy: "min"
      }
    },
    size: {
      value: 4,
      random: {
        enable: true,
        minimumValue: 2
      }
    },
    links: {
      enable: false
    },
    life: {
      count: 1
    },
    move: {
      enable: true,
      gravity: {
        enable: true,
        acceleration: 10
      },
      speed: {
        min: 10,
        max: 20
      },
      decay: 0.1,
      direction: "none",
      straight: false,
      outModes: {
        default: "destroy",
        top: "none"
      }
    },
    rotate: {
      value: {
        min: 0,
        max: 360
      },
      direction: "random",
      move: true,
      animation: {
        enable: true,
        speed: 60
      }
    },
    tilt: {
      direction: "random",
      enable: true,
      move: true,
      value: {
        min: 0,
        max: 360
      },
      animation: {
        enable: true,
        speed: 60
      }
    },
    roll: {
      darken: {
        enable: true,
        value: 25
      },
      enable: true,
      speed: {
        min: 15,
        max: 25
      }
    },
    wobble: {
      distance: 30,
      enable: true,
      move: true,
      speed: {
        min: -15,
        max: 15
      }
    }
  },
  emitters: {
    life: {
      count: emittersLifeCount,
      duration: 0.1,
      delay: 0.4
    },
    rate: {
      delay: 0.1,
      quantity: 150
    },
    size: {
      width: 0,
      height: 0
    }
  }
};



export default ThankYou
