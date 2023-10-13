import React,{useState,useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {Box, Spacer, ScrollView,Text} from '../../components/index';
import Header from '../../components/Header';
import StoryList from '../../components/Story/list';
import PostList from '../../components/Post/list';
import api from '../../services/api';



const Feed = ({navigation}) => {
  const [loading, setLoading] = useState(false);
  const [feed, setFeed] = useState({
    stories: [],
    post: [],
  });

  const getFeed = async () => {
    try {
      setLoading(true);
      const {data: feedData} = await api.get('/feed');
      setFeed(feedData);
      setLoading(false);

    } catch (err){
      setLoading(false);
      alert(err);
    }
  };

  // FOCUS, toda vez que tiver focus esse useEffect chama a função, ou seja quando essa tela receber foco
  useEffect(() => {
    const unsibscribe = navigation.addListener('focus', () => {
      getFeed();
    });

    return unsibscribe;
  }, [navigation]);

    return (
        <Box background="light">
          <Header title={'Explore'}/>
          <ScrollView>
            <StoryList stories={feed?.stories}/>
            <Spacer/>
            <PostList post={feed?.post}/>
          </ScrollView>
        </Box>
    );
};


export default Feed;
