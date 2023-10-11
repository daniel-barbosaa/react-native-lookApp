import React, {useState, useContext} from 'react';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../contexts/app';


import {Box,Button,Spacer,Text, Title, Input} from '../../components/index';
import { StatusBar } from 'react-native';

const SingIn = ({navigation, replace}) => {

    const {setUser: setUserContext} = useContext(AppContext);

    const [user, setUser] = useState({
        'email': '',
        'password': '',
    });



    const requestLogin = async () => {

        if (user.email.length === 0 || user.password.length === 0 ){
            alert('Empty field!');
            return false;
        }

         try {
             const {data: users} = await api.get('/users', {
                 params: {
                    email: user.email,
                    password: user.password,
                 },
             }, );

             const [loggedUser] = users;

             if (!loggedUser){
                alert('Invalid user!');
                return false;
             }

            await AsyncStorage.setItem('@user', JSON.stringify(loggedUser));

            setUserContext(loggedUser);
            navigation.navigate('Feed');

         } catch (err){
             alert(err.message);
         }




    // Resolvi aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

    // vai a merda erro nojeto :3
    // Possible Unhandled Promise Rejection (id: 0):
    // [AxiosError: Network Error]


    };


    return (
        <>
        <StatusBar barStyle={'dark-content'}/>
            <Box background="light" justify="center" align="center" hasPadding >
            <Spacer size="70px"/>
            <Title bold variant="big">LOOKAPP</Title>
            <Spacer size="30px"/>
            <Title bold variant="small">SignIn my account.</Title>
            <Spacer size="20px"/>
            <Input placeholder="E-mail"
            value={user.email}
            onChangeText={(email) => {
                setUser({...user, email});
            }}/>
            <Spacer/>
            <Input placeholder="Password"
            secureTextEntry
            value={user.password}
            onChangeText={(password) => {
                setUser({...user, password});
            }}
            />
            <Spacer size="40px"/>
            <Button block  onPress={() => requestLogin()}>
                <Text color="light">SignIn into my account</Text>
            </Button>
            <Spacer/>
            <Text  onPress={() => navigation.navigate('SingUp')} underline>Create new account</Text>
        </Box>
        </>

    );
};

export default SingIn;
