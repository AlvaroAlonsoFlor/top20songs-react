import React from 'react';
import Song from './Song.js';

const SongList = (props) => {
    const songList = props.songs.map((song) => {
        return <Song song={song} key={song.id.attributes['im:id']}/>
    })

    return (
        <div className="song-list">
            {songList}
        </div>

    )
}

export default SongList;