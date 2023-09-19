import React from 'react';

import {Box,Button,Spacer,Text, Title, Input} from '../../components/index';
import { StatusBar } from 'react-native';

const SingIn = () => {
    return (
        <>
        <StatusBar barStyle={'dark-content'}/>
            <Box background="light" justify="center" align="center" hasPadding >
            <Spacer size="70px"/>
            <Title bold variant="big">LOOKAPP</Title>
            <Spacer size="30px"/>
            <Title bold variant="small">SignIn my account.</Title>
            <Spacer size="20px"/>
            <Input placeholder="E-mail"/>
            <Spacer/>
            <Input placeholder="Password" secureTextEntry/>
            <Spacer size="40px"/>
            <Button block>
                <Text color="light">SignIn into my account</Text>
            </Button>
            <Spacer/>
            <Text  onPress={() => alert('deu certo')} underline>Create new account</Text>
        </Box>
        </>

    );
};

export default SingIn;
