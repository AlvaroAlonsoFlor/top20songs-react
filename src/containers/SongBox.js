import React, {Component} from 'react';
import SongList from '../components/SongList.js'


export default class SongBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            yehhaaa: 'is working',
            currentSong: null
        }
    }

    componentDidMount() {

        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json') 
            .then((response) => response.json())
            .then((data) => this.setState({
                songs: data.feed.entry
            }));
        console.log(this.state.songs);
    }

    render() {
        return(
            <SongList songs={this.state.songs}/>
        )
    }
}