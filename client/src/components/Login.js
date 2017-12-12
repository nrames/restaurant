import React from 'react';
import { login } from '../fakeAuth';
import { Segment, Button, Header } from 'semantic-ui-react';

const loginButtonClick = (history) => {
  login();
  history.push('/menu');
}

const Login = ({ history }) => (
  <Segment basic>
    <Header as='h3'>Login to view Menu</Header>
    <Button onClick={() => loginButtonClick(history)}>
      Login
    </Button>
  </Segment>
)

export default Login;