import PropTypes from 'prop-types';
import styles from './Friend-list-item.module.css';

export const FriendListItem = ({avatar, name, isOnline}) => {
    return (
        <>
            <span className={`${styles.status} ${styles[isOnline]}`}>{isOnline}</span>
            <img className={styles.avatar} src={avatar} alt={name} width="48" />
            <p className={styles.name}>{name}</p>
        </>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  };