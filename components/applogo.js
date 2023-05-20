import { View,StyleSheet,Image } from 'react-native';
const AppLogo = ()=>{
    return <View style={styles.appLogoContainer}>
        <Image source={require('../assets/diet-app-logo.png')} style={styles.appLogo}/>
    </View>
}

const styles = StyleSheet.create({
    appLogoContainer: {
      height:200,
      width:200,
      borderRadius:100,
      margin:10,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      overflow:'hidden',
      borderWidth:2,
      borderColor:'black',
      borderStyle:'solid',
    },
    appLogo:{
        borderRadius:50,
        resizeMode:'center',
    }
  });

export default AppLogo;