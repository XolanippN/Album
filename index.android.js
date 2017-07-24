// Index.android.js - place code in here for Android

// import a library to create a component

import React, { component } from 'react';
import { AppRegistry,View }  from 'react-native';
import Header from './src/Components/Header';
import AlbumList from './src/Components/AlbumList';
// Create a component

const App = () => (
  // this view tag is make sure this main function returns only one element so we rap everything under it.
    <View style={{flex:1}}>
        <Header headerText = { 'Albums' } />
        <AlbumList />
    </View>
  );

// Render it to the device
AppRegistry.registerComponent('albums', () => App);