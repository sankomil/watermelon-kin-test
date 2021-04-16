import React, { useState } from 'react';
import { Button, Modal, Text, TextInput, TouchableHighlight, View } from 'react-native';
import { saveDrug } from '../data/helpers';
import { creatorStyles, primaryColor } from './styles';

export const Creator = ({ isCreatorVisible, onHideCreator }) => {
  const [isSaving, setIsSaving] = useState(false);
  const [drug, setDrug] = useState({ name: '', note: '', strength: 0, unit: 'N/A' });

  const handleSavePress = async () => {
    setIsSaving(true);
    const { name, note, strength, unit } = drug;
    await saveDrug({ name, note, strength, unit });
    // hide modal
    onHideCreator();
    // Clear out the inputs
    setDrug({ name: '', note: '', strength: 0, unit: '' });

    // Make button active again
    setIsSaving(false);
  };

  return (
    <Modal animationType="slide" transparent={true} visible={isCreatorVisible}>
      <View style={creatorStyles.centeredView}>
        <View style={creatorStyles.modalView}>
          <View style={creatorStyles.topActions}>
            <Text>Add your drug</Text>
            <TouchableHighlight
              onPress={() => {
                onHideCreator();
              }}
            >
              <Text style={creatorStyles.topCloseButton}>×</Text>
            </TouchableHighlight>
          </View>
          <TextInput
            style={creatorStyles.input}
            placeholder="Drug Name"
            keyboardType="decimal-pad"
            onChangeText={text => setDrug({ ...drug, name: text })}
            value={drug.name}
          />
          <TextInput
            placeholder="Additional note (optional)"
            style={creatorStyles.input}
            onChangeText={text => setDrug({ ...drug, note: text })}
            value={drug.note}
          />
          <TextInput
            placeholder="Additional unit"
            style={creatorStyles.input}
            onChangeText={text => setDrug({ ...drug, unit: text })}
            value={drug.unit}
          />
          <TextInput
            placeholder="Additional strength"
            style={creatorStyles.input}
            onChangeText={text => setDrug({ ...drug, strength: parseInt(text) })}
          />
          <Button title="Save" disabled={isSaving} color={primaryColor} onPress={handleSavePress} />
        </View>
      </View>
    </Modal>
  );
};

export default Creator;
