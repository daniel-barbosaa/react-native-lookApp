import React, {useState} from 'react';
import api from '../../services/api';

import {Box,Button,Spacer,Text, Title, Input} from '../../components/index';
import { Alert, StatusBar } from 'react-native';

const SingIn = ({navigation}) => {
    const [user, setUser] = useState({
        email: '',
        password: '',
    });

    const requestLogin = async () => {
        try {

            const {data: userData} = await api.get('/users', {
                params: {
                    email: user.email,
                    password: user.password,
                },
            });

            console.log(userData);

        } catch (err){
            alert(err.message);
        }

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
