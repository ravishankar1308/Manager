import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {View, Text} from 'react-native';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';

class App extends Component{

    componentWillMount(){
        var firebaseConfig = {
          apiKey: "AIzaSyAWYd-OB_0iVieXHUbwZvsIc_jsoZdfCP0",
          authDomain: "manager-2e6d1.firebaseapp.com",
          databaseURL: "https://manager-2e6d1.firebaseio.com",
          projectId: "manager-2e6d1",
          storageBucket: "manager-2e6d1.appspot.com",
          messagingSenderId: "236183706105",
          appId: "1:236183706105:web:9306a5ce990448ec"
        };
        firebase.initializeApp(firebaseConfig);
      }


  render(){
    return(
      <Provider store={createStore(reducers)}>
        <View>
          <LoginForm/>
        </View>
      </Provider>
    );
  }
}

export default App;