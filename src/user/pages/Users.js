import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
      id: 'u1',
      name: 'Suryansh Singh',
      username: "thinkers",
      image:'https://wp.inews.co.uk/wp-content/uploads/2022/02/peaky-blinders-season-5.jpeg',
      catBio: "Department of Nothing"
    },
    {
      id: 'u2',
      name: 'Gems of Likes',
      username: "gemsoflikes",
      image:'https://i.pinimg.com/236x/df/5c/1e/df5c1eb2bbb7aa571a396533a9aefece--poke-me-glitter-wallpaper.jpg',
      catBio: "Department of Likes"
    },
    {
      id: 'u3',
      name: 'World of Engineering',
      username: "engineerings",
      image:'https://i.pinimg.com/736x/fa/8a/a4/fa8aa43569687f96b8afd6a1e7539e20.jpg',
      catBio: "Department of Engineering"
    },
  ];

  return <>
    <UsersList items={USERS} />;
  </>
};

export default Users;
