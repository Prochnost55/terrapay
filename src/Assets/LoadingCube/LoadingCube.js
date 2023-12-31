import React from 'react';
import "./LoadingCube.css";

const LoadingCube = (props) => {
    React.useEffect(() => {
        animate();
    }, [])
    function animate() {

        var cube = document.getElementById('cube');
        var lid = document.getElementById('lid');
        var base = document.getElementById('base');

        var lid_coordinates = [
            // lid outline
            [[-3, 3, 3], [-3, -3, 3], [3, -3, 3], [3, 3, 3], [-3, 3, 3], [-3, 3, 1], [-3, -3, 1], [3, -3, 1], [3, -3, 3]],
            // lid inner lines
            [[3, 1, 3], [-3, 1, 3], [-3, 1, 1]],
            [[3, -1, 3], [-3, -1, 3], [-3, -1, 1]],
            [[-3, -3, 3], [-3, -3, 1]],
            [[-1, -3, 1], [-1, -3, 3], [-1, 3, 3]],
            [[1, -3, 1], [1, -3, 3], [1, 3, 3]]
        ];

        var base_coordinates = [
            [[-3, 3, 1], [3, 3, 1], [3, -3, 1], [-3, -3, 1], [-3, 3, 1], [-3, 3, -3], [-3, -3, -3], [3, -3, -3], [3, -3, 1]],
            [[1, -3, -3], [1, -3, 1], [1, 1, 1], [-3, 1, 1], [-3, 1, -3]],
            [[-1, -3, -3], [-1, -3, 1], [-1, -1, 1], [-3, -1, 1], [-3, -1, -3]],
            [[-3, -3, -3], [-3, -3, 1]],
            [[-3, 3, -1], [-3, -3, -1], [3, -3, -1]]
        ];

        var u = 4; // size of the cube
        var t = 0; // time

        /*
         * Take in arrays of arrays of coordinates and projects them onto an isometric grid.
         * We also pass a parameter t to control the Z rotation of the object, so it can be animated.
         */
        function project(coordinatesGroup, t) {
            return coordinatesGroup.map(function (coordinatesSubGroup) {
                return coordinatesSubGroup.map(function (coordinates) {
                    var x = coordinates[0];
                    var y = coordinates[1];
                    var z = coordinates[2];

                    return [
                        (x * Math.cos(t) - y * Math.sin(t)) * u + 30,
                        (x * -Math.sin(t) - y * Math.cos(t) - z * Math.sqrt(2)) * u / Math.sqrt(3) + 30
                    ];
                });
            });
        }

        /*
         * Takes in arrays of arrays of coordinates and outputs an SVG path 'd' attribute.
         * The pen is lifted between child arrays, which represent series of lines.
         * The pen draws a line through all coordinates in the grandchild arrays.
         */
        function toPath(coordinates) {
            return 'M' + (JSON
                .stringify(coordinates)
                .replace(/]],\[\[/g, 'M')
                .replace(/],\[/g, 'L')
                .slice(3, -3)
            );
        }

        /*
         * A discontinuous sine ease-in-out easing function.
         * It starts with the lid rotated at 45 degrees (lines up with the rest of the cube).
         * It eases into a rotation, reaching its maximum speed at 90 degrees.
         * It snaps back to 0 degrees (to emulate that it has continued spinning), keeping its velocity.
         * It eases out of the rotation, coming to a stop at 45 degrees, ready to repeat.
        */
        function easing(t) {
            return (2 - Math.cos(Math.PI * t)) % 2 * Math.PI / 4;
        }

        /*
         * run every frame
         */
        function tick() {
            t = (t + 1 / 30) % 3;
            // rotate the entire cube every spin, to mimic differnt faces being turned
            cube.style.transform = 'rotate(' + (Math.floor(t) * 120) + 'deg)';

            lid.setAttribute('d', toPath(project(lid_coordinates, easing(t))));
            requestAnimationFrame(tick);
        }

        base.setAttribute('d', toPath(project(base_coordinates, Math.PI / 4)));

        tick();

    };
    return (
        <svg viewBox="0 0 60 60" width="320" stroke="#233671" strokeLineJoin="round" {...props}>
            <g id="cube" fill="#fff">
                <path id="base" />
                <path id="lid" />
            </g>
        </svg>
    )

    // return (
    //     <lottie-player 
    //         src="https://lottie.host/939e624c-c6f7-4809-a4f3-1d3aa5892cf3/rgAUDqBxNG.json" 
    //         background="#fff" 
    //         speed="1" 
    //         style={{width: "300px", height: "300px"}}
    //         loop controls autoplay direction="1" mode="normal"
    //     >

    //         </lottie-player>
    // )
}

export default LoadingCube;
