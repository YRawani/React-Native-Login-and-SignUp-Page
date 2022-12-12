import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React from 'react';
import {colors} from '../constant';

const SignInScreen = () => {
  return (
    <View style={{marginTop: 40}}>
      <View style={styles.topContainer}>
        <Image
          source={require('../assets/Vector.png')}
          style={{height: 35, width: 40}}
        />
        <Text style={styles.consultTxt}>CONSULT</Text>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: '#8BECA1',
            borderRadius: 100,
            marginRight: -180,
            marginTop: -110,
          }}></View>
        <View
          style={{
            height: 200,
            width: 200,
            backgroundColor: colors.primaryColor,
            borderRadius: 100,
            marginRight: -200,
            marginTop: -130,
          }}></View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          marginTop: 80,
          backgroundColor: colors.bgcolor,
          marginHorizontal: -25,
          height: 800,
          borderRadius: 40,
        }}>
        <Image
          source={require('../assets/cat.png')}
          style={{height: 170, width: 300, alignSelf:'center', marginTop:-200}}
        />

        
        <TextInput
          placeholder="Enter your email: "
          placeholderTextColor={colors.textColor}
          style={styles.inputContainer}
        />
        <TextInput
          placeholder="Enter your password: "
          placeholderTextColor={colors.textColor}
          style={styles.inputContainer}
        />
        
          <TouchableOpacity>
            <Text style={{marginTop:30,color:colors.primaryColor,fontWeight:'600',alignSelf:'center',fontSize:15}}>
              Forget Password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.startBtn} activeOpacity={0.8}>
          <Text
            style={{
              color: colors.white,
              fontWeight: '600',
              fontSize: 20,
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
        <View
          style={{flexDirection: 'row', alignSelf: 'center', marginBottom: 20}}>
          <Text
            style={{
              color: colors.textColor,
              fontSize: 15,
              fontWeight: '400',
              alignSelf: 'center',
              marginTop: 50,
              textAlign: 'center',
            }}>
            Don't have an account?
          </Text>
          <TouchableOpacity style={{marginTop: 50}}>
            <Text
              style={{
                color: colors.primaryColor,
                fontWeight: '400',
                fontSize: 15,
              }}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    marginHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  consultTxt: {
    color: colors.primaryColor,
    fontSize: 16,
    fontWeight: '900',
    alignSelf: 'center',
    margin: 10,
    marginTop: -40,
  },
  text2: {
    color: colors.primaryColor,
    fontSize: 25,
    fontWeight: '600',
    alignSelf: 'center',
    marginTop: -160,
    textAlign: 'center',
  },
  startBtn: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    height: 50,
    width: 160,
    backgroundColor: colors.primaryColor,
    borderRadius: 10,
  },
  inputContainer: {
    backgroundColor: colors.TxtInputColor,
    marginTop: 20,
    margin: 10,
    height: 50,
    width: 300,
    alignSelf: 'center',
    borderRadius: 10,
    padding: 10,
  },
});

export default SignInScreen;
