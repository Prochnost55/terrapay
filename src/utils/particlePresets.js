const totalDuration = 3 /* * 60 * 60*/,
    emittersLifeCount = totalDuration / 0.5;


export const CONFETI = {
    fullScreen: {
        zIndex: 1
    },
    particles: {
        number: {
            value: 2
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
            duration: 8,
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

export const SNOW = {
    "fullScreen": {
        "zIndex": 0
    },
    "particles": {
        "number": {
            "value": 15,
            "density": {
                "enable": false
            }
        },
        "size": {
            "value": 6,
            "random": true
        },
        "move": {
            "enable": true,
            "direction": "bottom",
            "out_mode": "out"
        },
        "line_linked": {
            "enable": false
        }
    },
    "interactivity": {
        "events": {
            "onclick": {
                "enable": true,
                "mode": "remove"
            }
        },
        "modes": {
            "remove": {
                "particles_nb": 1
            }
        }
    }
};

export const BUBBLES = {
    "particles": {
        "number": {
            "value": 60,
            "density": {
                "enable": false
            }
        },
        color: {
            value: ["#EB5E57", "#FFFFFF"]
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "speed": 4,
                "size_min": 0.3
            }
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "random": true,
            "speed": 1,
            "direction": "top",
            "out_mode": "out"
        }
    },
    "interactivity": {
        "events": {
            "onhover": {
                "enable": true,
                "mode": "bubble"
            },
            "onclick": {
                "enable": true,
                "mode": "repulse"
            }
        },
        "modes": {
            "bubble": {
                "distance": 250,
                "duration": 2,
                "size": 0,
                "opacity": 0
            },
            "repulse": {
                "distance": 400,
                "duration": 4
            }
        }
    }
}
