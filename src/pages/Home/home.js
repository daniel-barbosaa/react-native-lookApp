import React from 'react';

import { Title, Box, Text, Button, Spacer } from '../../components/index';

const Home = () => {
  return (
    <Box justify="center" hasPadding align="center" background={'gray50'}>
      <Title color={'danger'} >Olá mundo</Title>
      <Text>teste</Text>
      <Spacer size="100px"  />
      <Button block>
        <Text color={'light'}>teste</Text>
      </Button>
    </Box>
  );
};

export default Home;
