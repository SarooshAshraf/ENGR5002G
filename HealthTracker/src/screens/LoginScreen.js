import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput, Button, Card, Title, Paragraph } from 'react-native-paper';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledButton = styled(Button);
const StyledCard = styled(Card);
const StyledTextInput = styled(TextInput);

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Basic validation, replace with actual logic
    if (email && password) {
      navigation.replace('Main');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <StyledView className="flex-1 justify-center items-center p-4 bg-gray-100">
      <StyledCard className="w-full max-w-md p-4">
        <Card.Content>
          <Title className="text-center text-2xl mb-6">HealthTracker Login</Title>
          <StyledTextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            className="mb-4"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <StyledTextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="mb-6"
          />
          <StyledButton mode="contained" onPress={handleLogin} className="mb-4">
            Login
          </StyledButton>
          <StyledButton icon="google" mode="outlined" onPress={() => alert('Google OAuth Clicked')} className="mb-2">
            Sign in with Google
          </StyledButton>
          <StyledButton icon="apple" mode="outlined" onPress={() => alert('Apple OAuth Clicked')}>
            Sign in with Apple
          </StyledButton>
        </Card.Content>
      </StyledCard>
    </StyledView>
  );
};

export default LoginScreen; 