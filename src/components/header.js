import React from 'react';
import { View, Text, TouchableHighlight } from 'react-native';

import { headerStyles } from './styles';

export const Header = ({ onOpenCreator }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.headerTitle}>Kin</Text>
      <TouchableHighlight style={headerStyles.addButton} onPress={() => onOpenCreator()}>
        <Text>+ Add</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Header;
