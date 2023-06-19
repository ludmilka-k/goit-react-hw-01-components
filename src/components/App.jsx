import { Profile } from './Profile/Profile.jsx';
import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './Friends/Friend-list.jsx';
import { TransactionHistory } from './Transactions/Transaction-history.jsx';
import user from '../database/user.json';
import data from '../database/data.json';
import friends from '../database/friends.json';
import transactions from '../database/transactions.json';



export const App = () => {
  return (
    <>
      <Profile  
      // {...user}
        username={user.username} 
        tag={user.tag}
        location={user.location}
        avatar={user.avatar} 
        stats={user.stats}
      />
       <Statistics title="Upload stats" stats={data} />
       <FriendList friends={friends} />
       <TransactionHistory items={transactions} />
    </>
  );
};
