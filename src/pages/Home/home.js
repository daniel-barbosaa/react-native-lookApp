import React from 'react';

import { Title, Box, Text, Button, Spacer } from '../../components/index';

const Home = () => {
  return (
    <Box justify="center" hasPadding align="center" background="dark">
     <Box justify="center" align="center">
     <Title color="light" bold variant="big" >LOOKAPP</Title>
      <Spacer/>
      <Text align="center" spacing="0px 20px">
        Stay on top of the fashion world
        and buy your favorite looks.
      </Text>
     </Box>
     <Box justify="flex-end" align="center">
     <Button block >
        <Text color={'light'}>SigIn my account</Text>
      </Button>
      <Spacer/>
     <Text underline color="light" onPress={() => alert('text')}>Create new account</Text>
     <Spacer size="50px"/>
     </Box>
    </Box>
  );
};

export default Home;
