import React from 'react';
import PropTypes from 'prop-types';

const Delete = props => {
    const { className } = props;

    return (
        <svg
            className={className}
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
                    <g id="circle_61_">
                        <g>
                            <path d="M26,42h12V26H26V42z M33,28h2v12h-2V28z M29,28h2v12h-2V28z M32,0C14.327,0,0,14.327,0,32s14.327,32,32,32 c17.674,0,32-14.327,32-32S49.674,0,32,0z M42,26h-2v16c0,1.104-0.896,2-2,2H26c-1.104,0-2-0.896-2-2V26h-2v-2h5v-2 c0-1.104,0.896-2,2-2h6c1.104,0,2,0.896,2,2v2h5V26z M35,22h-6v2h6V22z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Delete.propTypes = {
    className: PropTypes.string
};

Delete.defaultProps = {
    className: ''
};

export default Delete;
