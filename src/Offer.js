import { View, Text, Button, Linking } from 'react-native';
import React from 'react';

const Offer = () => {
  return (
    <View>
      <Text>New Offer!</Text>
      <Button title='Linking'>onPress={Linking.openURL('onlysingles')}</Button>
    </View>
  );
};

export default Offer;
