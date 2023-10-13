import React,{ useState, useContext} from 'react';

import {ActivityIndicator, Alert} from 'react-native';

import {Box,Button,Spacer,Text, Title, Input} from '../../components/index';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AppContext} from '../../contexts/app';


const SingUp = ({navigation}) => {
    const {setUser: setUserLogged} = useContext(AppContext);

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
       name: '',
       email: '',
       password: '',
    });

    const requestSingup = async () => {

        try {

            if (user.name.length === 0 || user.email.length === 0 || user.password.length === 0) {
                alert('Empty field!');
                return false;
            }
            setLoading(true);
            const {data: loggedUser} = await api.post('/users', user);

            if (!loggedUser){
                setLoading(false);
                alert('Não foi possivel criar conta');
                return false;
            }

            //salvando o user no device local
            AsyncStorage.setItem('@user', JSON.stringify(loggedUser));
            setUserLogged(loggedUser);
            navigation.navigate('Feed');

        } catch (err){
            Alert(err);
        }
    };

    return (
        <Box background="light" justify="center" align="center" hasPadding>
            <Spacer size="70px"/>
            <Title bold variant="small">Create new account</Title>
            <Spacer/>
            <Text>Enter your details below:</Text>
            <Spacer size="20px"/>
            <Input placeholder="Name" editable={!loading} value={user.name} onChangeText={(name) => {
                setUser({...user, name });
            }}/>
            <Spacer/>
            <Input placeholder="E-mail" editable={!loading} value={user.email} onChangeText={(email) => {
                setUser({...user, email: email.toLowerCase()});
            }}/>
            <Spacer/>
            <Input placeholder="Password" secureTextEntry editable={!loading} value={user.password}
             onChangeText={(password) => {
                setUser({...user, password});
             }}/>
            <Spacer size="40px"/>

            {loading && <ActivityIndicator size="large"/>}
            {!loading && <>
                <Button block  onPress={() => requestSingup()}>
                    <Text color="light">Create new accounts</Text>
                </Button>
                <Spacer/>
                <Text onPress={() => navigation.navigate('SingIn')} underline >Back to signIn</Text>
            </>}

        </Box>
    );
};

export default SingUp;
