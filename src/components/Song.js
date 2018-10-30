import React from 'react';

const Song = (props) => {
    const image = props.song['im:image'][2].label;
    console.log(image);

    return(
        <div className='song'>
            <img src={image} alt='' width='170px' height='170px' />
        </div>
    );
}

export default Song;