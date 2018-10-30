import React from 'react';
import './song.css';

const Song = (props) => {
    const image = props.song['im:image'][2].label;
    const title = props.song['im:name'].label;
    const artist = props.song['im:artist'].label;
    const genre = props.song.category.attributes.label;
    

    return(
        <div className='song'>
            <img src={image} alt={`${title} from ${artist}`} width='170px' height='170px' />
            <h4>#{props.position} {title}</h4>
            <h5>Artist: {artist}</h5>
            <h5>Genre: {genre}</h5>
        </div>
    );
}

export default Song;