import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" />
        <Text style={styles.textProp}>Login</Text>
        <View>
          <TextInput
            placeholderTextColor={'#BDC7D4'}
            placeholder={'Email'}
            style={styles.emailField}
          />
          <View>
            <TextInput
              placeholderTextColor={'#BDC7D4'}
              placeholder={'Password'}
              style={styles.pwdField}
            />
            <View>
              <TouchableOpacity style={styles.signButton} activeOpacity={0.5}>
                <Text style={styles.btnTxt}> Sign in </Text>
              </TouchableOpacity>
              <View>
                <Text style={styles.bodyTxt}>
                  Create account?
                  <Text style={styles.signUpTxt}>Sign up</Text>
                </Text>
                <View />
              </View>
              <View>
                <Text style={styles.footerTxt}>WeGo</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121921',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textProp: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 38,
    color: '#ffffff',
    marginTop: 32,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 37,
    alignSelf: 'flex-start',
  },
  emailField: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#BDC7D4',
    width: 286,
    height: 60,
    backgroundColor: '#314256',
    borderRadius: 30,
    paddingLeft: 22,
    marginTop: 98,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  pwdField: {
    fontFamily: 'Montserrat-Light',
    fontSize: 14,
    color: '#BDC7D4',
    width: 286,
    height: 60,
    backgroundColor: '#314256',
    borderRadius: 30,
    paddingLeft: 22,
    marginTop: 36,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  btnTxt: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    textAlign: 'center',
    color: '#ffffff',
    backgroundColor: '#0176FB',
    padding: 0,
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 30,
    width: 138,
    height: 52,
  },
  signButton: {
    alignSelf: 'center',
    marginTop: 47,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0,
  },
  bodyTxt: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#ffffff',
    marginTop: 58,
    marginBottom: 0,
    marginRight: 0,
    marginLeft: 0,
    alignSelf: 'center',
  },
  signUpTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    color: '#0176FB',
  },
  footerTxt: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
    alignSelf: 'center',
    color: '#314256',
    marginTop: 0,
    marginBottom: 16,
    marginRight: 0,
    marginLeft: 0,
    paddingTop: 100,
  },
});
