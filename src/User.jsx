import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

function User() {
  const {name, email } = useParams();
  const query = new URLSearchParams(useLocation().search);
  const id = query.get('id');

  return (
    <div>
      <h2>nama={name}</h2>
      <p>email : <code>{email}</code></p>
      <p>ID : {id}</p>
    </div>
  );
}

export default User;