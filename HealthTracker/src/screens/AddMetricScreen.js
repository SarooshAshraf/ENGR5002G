import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { addMetric } from '../store/healthSlice';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledCard = styled(Card);
const StyledTextInput = styled(TextInput);

const AddMetricScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleAddMetric = () => {
    if (name && value) {
      dispatch(addMetric({ name, value, date: new Date().toLocaleDateString() }));
      navigation.goBack();
    } else {
      alert('Please enter metric name and value');
    }
  };

  return (
    <StyledView className="flex-1 justify-center items-center p-4 bg-gray-100">
      <StyledCard className="w-full max-w-md p-4">
        <Card.Content>
          <Title className="text-center text-2xl mb-6">Add New Health Metric</Title>
          <StyledTextInput
            label="Metric Name (e.g., Heart Rate, Sleep)"
            value={name}
            onChangeText={setName}
            className="mb-4"
          />
          <StyledTextInput
            label="Metric Value (e.g., 80 bpm, 8 hrs)"
            value={value}
            onChangeText={setValue}
            className="mb-6"
          />
          <StyledButton mode="contained" onPress={handleAddMetric} className="bg-blue-500 py-2">
            Add Metric
          </StyledButton>
        </Card.Content>
      </StyledCard>
    </StyledView>
  );
};

export default AddMetricScreen; 