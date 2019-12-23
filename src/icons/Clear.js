import React from 'react';

const ClearIcon = props => (
    <svg
        onClick={props.onClick}
        className={props.className}
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="32px"
        height="32px"
        viewBox="0 0 64 64"
        style={{ enableBackground: 'new 0 0 64 64' }}
    >
        <g>
            <g>
                <g id="circle_copy_4_5_">
                    <g>
                        <path
                            d="M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32s32-14.327,32-32S49.673,0,32,0z M41.191,39.777l-1.414,1.414L32,33.414
                            l-7.778,7.777l-1.414-1.414L30.586,32l-7.778-7.778l1.414-1.414L32,30.586l7.777-7.778l1.414,1.414L33.414,32L41.191,39.777z"
                        />
                    </g>
                </g>
            </g>
        </g>
    </svg>
);

export default ClearIcon;
