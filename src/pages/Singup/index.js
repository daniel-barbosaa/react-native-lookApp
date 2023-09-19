import React from 'react';

import {Box,Button,Spacer,Text, Title, Input} from '../../components/index';

const SingUp = () => {
    return (
        <Box background="light" justify="center" align="center" hasPadding >
            <Spacer size="70px"/>
            <Title bold variant="small">Create new account</Title>
            <Spacer/>
            <Text>Enter your details below:</Text>
            <Spacer size="20px"/>
            <Input placeholder="Name"/>
            <Spacer/>
            <Input placeholder="E-mail"/>
            <Spacer/>
            <Input placeholder="Password" secureTextEntry/>
            <Spacer size="40px"/>
            <Button block>
                <Text color="light">Create new accounts</Text>
            </Button>
            <Spacer/>
            <Text  onPress={() => alert('deu certo')} underline>Back to signIn</Text>
        </Box>
    );
};

export default SingUp;
