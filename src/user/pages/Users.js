import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Ali",
      image:
        "https://media-exp1.licdn.com/dms/image/C4D03AQF3BBl5NnmOzQ/profile-displayphoto-shrink_200_200/0?e=1594857600&v=beta&t=Oxn8vzDs6uVRJvWejmAlBUC1wco25QbXvDs7YzOI54Q",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
