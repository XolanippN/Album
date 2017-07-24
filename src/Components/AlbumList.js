// import libraries for making components

import React, { Component } from 'react';
import { ScrollView }  from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// Create a class based component that fetches data from an Api call

class AlbumList extends Component {

    state = { albums: [] };

    componentWillMount() {
        // call to the api, returns object
        axios.get('https:rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({
            albums:response.data 
        }));
    }

    renderAlbums(){
      return this.state.albums.map( album =>
      // normally the key is sappose to the id
         <AlbumDetail key={album.title} currentAlbum={album} />
       );
    }

   
    render () {
  
        return(        
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}


// Make the component available to other parts of the app
export default AlbumList;