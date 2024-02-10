import { View, Text, Image, TouchableOpacity} from 'react-native'
import { StyleSheet } from 'react-native';
import React from 'react'
import Colors from '../../Utllis/Colors';

export default function Login() {
  return (
    <View style={{alignItems:'center'}}>
    <Image source={require('./../../../assets/login.png')}
    style={styles.LoginImage}
    /> 
    
    <View style={styles.subContainer}>
      <Text style={{fontSize:27, color:Colors.WHITE, textAlign:'left',marginTop:1 }}>
        Let's Find <Text style={{fontWeight:'bold'}}>Professional Resume Writers </Text>For You!
      </Text>
      <Text style={{fontsize:10,color:Colors.WHITE, marginTop:20}}>
        Why Settle for boring resume when you can have a professional resume that will make you stand out from the crowd?
      </Text>
      <TouchableOpacity style={styles.button}
        onPress={()=>{console.log('Get Started')}}>
        <Text style={{color:Colors.PRIMARY,textAlign:'center', fontSize:17}}>
        Get Started
        </Text>
        </TouchableOpacity>
    </View>
    </View>
    
  )
}

const styles = StyleSheet.create({
  LoginImage:{
    width:230,
    height:450,
    marginTop: 70,
    borderWidth:4,
    borderColor:Colors.BLACK,
    borderRadius: 19,
  },
  subContainer:{
    width:'100%',
    backgroundColor:Colors.PRIMARY,
    height:'70%',
    marginTop:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
    padding:20,
  },
  button:{
    borderRadius:99,
    backgroundColor:Colors.WHITE,
    padding:15,
    marginTop:40,
  }
})