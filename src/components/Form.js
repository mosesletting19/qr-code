import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  max-width: 600px;
  margin: 0 auto;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 16px;
`;

const Button = styled.button`
  background-color: ${props => props.theme.primaryColor};
  color: #ffffff;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', { name, email });
    setName('');
    setEmail('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit">Send</Button>
    </FormContainer>
  );
};

export default Form;
