import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledCard = styled(Card);
const StyledFlatList = styled(FlatList);

const DashboardScreen = ({ navigation }) => {
  const metrics = useSelector((state) => state.health.metrics);

  const renderItem = ({ item }) => (
    <StyledCard className="mb-4 p-4 bg-white rounded-lg shadow">
      <Card.Content>
        <Title className="text-lg font-semibold">{item.name}</Title>
        <Paragraph className="text-md text-gray-700">Value: {item.value}</Paragraph>
        <Paragraph className="text-sm text-gray-500">Date: {item.date}</Paragraph>
      </Card.Content>
    </StyledCard>
  );

  return (
    <StyledView className="flex-1 p-4 bg-gray-100">
      <StyledText className="text-2xl font-bold mb-6 text-center text-blue-600">Health Dashboard</StyledText>
      <StyledFlatList
        data={metrics}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListEmptyComponent={<StyledText className="text-center text-gray-500">No health metrics yet. Add some!</StyledText>}
        className="mb-4"
      />
      <StyledButton 
        mode="contained" 
        onPress={() => navigation.navigate('AddMetric')} 
        className="mt-auto bg-green-500 py-2"
      >
        Add New Metric
      </StyledButton>
    </StyledView>
  );
};

export default DashboardScreen; 