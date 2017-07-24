import React from 'react';
import {Text , View, Image, Linking }  from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({currentAlbum}) => {
const {title,artist,thumbnail_image,image,url} = currentAlbum;
const{thumbnailStyle, imageStyle  , headerContentStyle, thunmbnailContainerStyle,headerTextStyle} = styles;

    return(
       <Card>
       
         <CardSection>
            <View  style={styles.thumbnailContainerStyle}>
            <Image
             style={styles.thumbnailStyle}
             source={{ uri:thumbnail_image }}
             />
            </View>
              <View style = {styles.headerContentStyle} >
                <Text style = {styles.headerTextStyle}>{title}</Text>
                <Text>{artist}</Text>
             </View>
         </CardSection>

          <CardSection>
            <Image
             style={styles.imageStyle}
             source={{ uri: image }}
             />
         </CardSection>

          <CardSection>
            <Button buttonPressed={() => Linking.openURL(url)}/>
         </CardSection>

       </Card> 
    )

};

  const styles = {
        headerTextStyle:{
        fontSize:18
        },
        headerContentStyle:{
          flexDirection:'column',
          justifyContent:'space-around',
           marginLeft:10,
       },
       thumbnailStyle:{
          height:50,
          width:50
       },
        imageStyle:{
          height:300,
          flex:1,
          width:null,
       },
       thunmbnailContainerStyle:{
         justifyContent:'center',
         alignItems:'center',
         marginLeft:10,
         marginRight:10,
       }
   };


export default AlbumDetail;