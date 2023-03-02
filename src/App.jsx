import { Profile } from "./components/Profile/Profile";
import { Statistics } from './components/Statistics/Statistics';
// import { FriendList } from './components/FriendsList/FreindList';
import user from './enter-files/user.json';
import data from './enter-files/data.json';
// import friends from './enter-files/friends.json';


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics data={data} title='Upload stats' />
      
      {/* <FriendList items={friends} /> */}
    </div>
  );
};


