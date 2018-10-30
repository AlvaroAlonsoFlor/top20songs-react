import React from 'react';
import Song from './Song.js';
import './song_list.css'

const SongList = (props) => {
    const songList = props.songs.map((song, position) => {
        return <Song song={song} key={song.id.attributes['im:id']} position={position + 1}/>
    })

    return (
        <div className="song-list">
            {songList}
        </div>

    )
}

export default SongList;