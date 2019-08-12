import React from 'react';

import Input from '~/components/Input';
import Button from '~/components/Button';
import Background from '~/components/Background';

export default function SignIn() {
  return (
    <Background>
      <Input style={{ marginTop: 30 }} icon="call" placeholder="Your name" />
      <Button>Sign In</Button>
    </Background>
  );
}
