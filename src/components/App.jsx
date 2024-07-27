import userData from '../userData.json';
import friends from '../friends.json';

import Profile from './Profile';
import FriendList from './FriendList';

import classes from './App.module.css';

function App() {
  return (
    <div className={classes['app']}>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </div>
  );
}

export default App;
