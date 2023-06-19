import PropTypes from 'prop-types';
import styles from './Friend-list-item.module.css';
import {FriendListItem} from './Friend-list-item.jsx'

export const FriendList = ({friends}) => {
    return (
        <ul className={styles.friendList}>
             {friends.map(friend => 
             <li key={friend.id} className={styles.item}>
             <FriendListItem
               id={friend.id}
               isOnline={friend.isOnline}
               avatar={friend.avatar}
               name={friend.name}
             />
           </li>)
            }       
        </ul>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
          })
    ).isRequired
}