import { useParams } from 'react-router-dom';
import DocsList from '../components/DocsList';

const UserDocs = () => {
  const DUMMY_USERS = [
    {
      id: 'u1',
      name: 'Suryansh Singh',
      username: "thinkers",
      awatar_image: 'https://wp.inews.co.uk/wp-content/uploads/2022/02/peaky-blinders-season-5.jpeg',
      catBio: "Department of Nothing",
      user_docs: [
        {
          id: 'p1',
          title: 'Newtonian Theories!',
          description: 'Most of the problems in this chapter are the type assigned in introductory courses on Classical Mechanics. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly.Most of the problems in this chapter are the type assigned in introductory courses on Classical Mechanics. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly',
        },
        {
          id: 'p2',
          title: 'Newtonian Theories!',
          description: 'Most of the problems in this chapter are the type assigned in introductory courses on Classical Mechanics. Their inclusion in this volume serves two purposes. First, they provide a “warm-up” for more advanced problems. More importantly',
        }
      ]
    },
    {
      id: 'u2',
      name: 'Gems of Likes',
      username: "gemsoflikes",
      awatar_image: 'https://i.pinimg.com/236x/df/5c/1e/df5c1eb2bbb7aa571a396533a9aefece--poke-me-glitter-wallpaper.jpg',
      catBio: "Department of Likes",
      user_docs: []
    },
    {
      id: 'u3',
      name: 'World of Engineering',
      username: "engineerings",
      awatar_image: 'https://i.pinimg.com/736x/fa/8a/a4/fa8aa43569687f96b8afd6a1e7539e20.jpg',
      catBio: "Department of Engineering",
      user_docs: []
    },
  ];


  // Get the userId from the URL parameters using the useParams hook from React Router
  const userId = useParams().userId;
  const loadedDocs = DUMMY_USERS.filter(place => place.id === userId);

  return (
    <>
      {loadedDocs.map(doc => (
        <DocsList
          key={doc.id}
          user={doc}
          userDocs={doc.user_docs}
        />
      ))}
    </>
  )
}
export default UserDocs