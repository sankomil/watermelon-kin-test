import React from 'react';
import withObservables from '@nozbe/with-observables';
import { observeDrugs } from '../data/helpers';
import { chartStyles } from './styles';
import { View, Text } from 'react-native';

export const Chart = ({ drugs }) => {
  if (drugs.length < 1) {
    return null;
  }

  const labels = [];
  const data = [];

  drugs.forEach(element => {
    labels.push({
      createdAt: `${element?.createdAt.getDate()}/${element?.createdAt.getMonth() + 1}`,
      name: element.name,
      unit: element.unit,
      strength: element.strength,
    });
    data.push(element.strength);
  });

  return (
    <View style={chartStyles.mainContainer}>
      <View style={chartStyles.container}>
        <View style={chartStyles.textContainer}>
          <Text>Name</Text>
        </View>
        <View style={chartStyles.textContainer}>
          <Text>Unit</Text>
        </View>
        <View style={chartStyles.textContainer}>
          <Text>Strength</Text>
        </View>
        <View style={chartStyles.textContainer}>
          <Text>Created At</Text>
        </View>
      </View>
      {labels.map(drug => (
        <View style={chartStyles.itemContainer} key={drug.name}>
          <View style={chartStyles.textContainer}>
            <Text>{drug.name}</Text>
          </View>
          <View style={chartStyles.textContainer}>
            <Text>{drug.unit}</Text>
          </View>
          <View style={chartStyles.textContainer}>
            <Text>{drug.strength}</Text>
          </View>
          <View style={chartStyles.textContainer}>
            <Text>{drug.createdAt}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const enhanceWithDrugs = withObservables([], () => ({
  drugs: observeDrugs(),
}));

export default enhanceWithDrugs(Chart);
