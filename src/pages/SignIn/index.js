import React from 'react';
import { Image } from 'react-native';

import logo from '~/assets/logo.png';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

import {
  Container,
  Form,
  FormInput,
  SubmitButton,
  SignLink,
  SignLinkText,
} from './styles';

export default function SignIn() {
  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Enter your email"
          />
          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Enter your password"
          />

          <SubmitButton onPress={() => {}}>Sign In</SubmitButton>
        </Form>

        <SignLink onPress={() => {}}>
          <SignLinkText>Create an account</SignLinkText>
        </SignLink>
      </Container>
    </Background>
  );
}
