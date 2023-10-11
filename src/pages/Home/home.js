/* eslint-disable react-hooks/exhaustive-deps */
import React, {useContext, useEffect, useState} from 'react';
import { Title, Box, Text, Button, Spacer } from '../../components/index';
import { ActivityIndicator } from 'react-native';

import { AppContext } from '../../contexts/app';

import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({navigation}) => {

  const {setUser} = useContext(AppContext);

  const [loading, setLoading] = useState(true);

  const isLogged = async () => {
    // AsyncStorage.clear();
    setLoading(true);

    const loggedUser = await AsyncStorage.getItem('@user');

    if (loggedUser){
      setUser(JSON.parse(loggedUser));
      navigation.navigate('Feed');
    } else {
      setLoading(false);
    }

  };

  useEffect(() => {
    isLogged();
  }, []);


  return (
    <Box justify="center" hasPadding align="center" background="dark">
     <Box justify="center" align="center">
     <Title color="light" bold variant="big" >LOOKAPP</Title>
      <Spacer/>
      <Text align="center" spacing="0px 20px">
        Stay on top of the fashion world
        and buy your favorite looks.
      </Text>
      {loading && <>
        <Spacer size="50px"/>
        <ActivityIndicator />
      </>}
     </Box>

     {!loading && <Box justify="flex-end" align="center" fluid>
     <Button block onPress={() => navigation.navigate('SingIn')}>
        <Text color={'light'}>SingIn my account</Text>
      </Button>
      <Spacer/>
     <Text underline color="light"  onPress={() => navigation.navigate('SingUp')}>Create new account</Text>
     <Spacer size="50px"/>
     </Box>
     }

    </Box>
  );
};

export default Home;
