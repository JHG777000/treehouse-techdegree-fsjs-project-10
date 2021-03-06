import React from 'react';
import { Redirect } from 'react-router-dom';

const UserSignOut = (props) => {
    props.utility().signOut();
    return (
      <Redirect to="/" />
    );
  }

  export default UserSignOut;