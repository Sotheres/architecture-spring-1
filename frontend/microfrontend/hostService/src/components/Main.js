import { React, lazy } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

const Profile = lazy(() => import('users/Profile').catch(() => {
  return { default: () => <div className="error">Component is not available!</div>}
}) );

const CardList = lazy(() => import('images/CardList').catch(() => {
  return { default: () => <div className="error">Component is not available!</div>}
}) );

function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onCardDelete }) {
  const currentUser = React.useContext(CurrentUserContext);

  const imageStyle = { backgroundImage: `url(${currentUser.avatar})` };

  return (
    <main className="content">
      <Profile />
      <CardList />
    </main>
  );
}

export default Main;
