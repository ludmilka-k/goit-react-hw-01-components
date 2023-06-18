import PropTypes from 'prop-types';
import styles from './Profile.module.css';



export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <div className={styles.profile}>
            <div className={styles.description}>
                <img
                src={avatar}
                alt={username}
                className={styles.avatar}
                />
                <p className={styles.name}>{username}</p>
                <p className={styles.tag}>@{tag}</p>
                <p className={styles.location}>{location}</p>
            </div>

            <ul className={styles.stats}>
                <li>
                <span className={styles.label}><b>Followers</b> </span>
                <span className={styles.quantity}>{stats.followers}</span>
                </li>
                <li>
                <span className={styles.label}><b>Views</b></span>
                <span className={styles.quantity}>{stats.views}</span>
                </li>
                <li>
                <span className={styles.label}><b>Likes</b></span>
                <span className={styles.quantity}>{stats.likes}</span>
                </li>
            </ul>
        </div>
    );
};

Profile.prototype = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }).isRequired,
}