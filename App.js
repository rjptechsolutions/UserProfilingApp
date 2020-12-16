import React,{useState, useEffect} from 'react';
import {
  StyleSheet 
  
} from 'react-native';

import {
  Button,
  Spinner,
  Text,
  View
} from 'native-base'

import Axios from 'axios'
import User from './Components/User';

const URL = 'https://randomuser.me/api/'

const App = () => {

  const [details, setDetails] = useState(null)

  const fetchDetails = async () =>{
    try {
      
      const {data} = await Axios.get(URL)

      const details = data.results[0]

      setDetails(details)

    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchDetails()
  }, [])

  if(!details){
    return(
      <View style={styles.container}>
        <Spinner color="#f31d1d" />
      </View>
    )
  }else {
    return (      
        <View style={styles.container}>
          <User details={details} />
          <Button
          rounded
          style={styles.btn}
          onPress={() => fetchDetails()}
          >
            <Text>New User</Text>             
          </Button>
        </View>      
    );
  }  
};

const styles = StyleSheet.create({
 container:{
   flex:1,
   justifyContent:"center",   
   alignItems:"center",
   backgroundColor:"#241b22"
 },
 btn:{
  alignSelf:'center', 
  marginTop:30,
  paddingHorizontal:30,
  backgroundColor:"#e21887",
  borderColor:"#fbd46d",
  borderWidth:2

 }
});

export default App;
