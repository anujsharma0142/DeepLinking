import { View, Text, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Clipboard from '@react-native-clipboard/clipboard';

const Home = () => {
  const navigation = useNavigation();
  const [generatedLink, setGeneratedLink] = useState('');

  useEffect(() => {
    const handleDynamicLink = (link) => {
      console.log(link.url)
      if (link && link.url === 'http://com.deeplinkdemo') {
        navigation.navigate('Offer');
      } else {
        Alert.alert('Not matched');
      }
    };
  
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);
    return () => unsubscribe();
  }, []);
  

  const buildLink = async () => {
    try {
      const link = await dynamicLinks().buildLink({
        link: 'https://deeplinkdemo0011.page.link/Go1D',
        domainUriPrefix: 'https://deeplinkdemo0011.page.link',
        analytics: {
          campaign: 'banner',
        },
      });

      setGeneratedLink(link);
    } catch (error) {
      console.log(error);
    }
  };

  const copyToClipboard = () => {
    Clipboard.setString(generatedLink);
    Alert.alert('Link copied to clipboard');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{generatedLink}</Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          backgroundColor: "blue",
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={buildLink}
      >
        <Text>Generate Deep Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          backgroundColor: "blue",
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={copyToClipboard}
      >
        <Text>Copy Deep Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          backgroundColor: "blue",
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 50,
        }}
        onPress={()=>navigation.navigate('Offer')}
      >
        <Text>Navigate To offer</Text>
      </TouchableOpacity>
    </View>
    
  );
};

export default Home;
