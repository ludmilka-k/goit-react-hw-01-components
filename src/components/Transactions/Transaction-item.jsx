import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';

export const TransactionItem = ({type, amount, currency}) => {
    return (
        <>
            <td className={styles.tableRowItem}>{type}</td>
            <td className={styles.tableRowItem}>{amount}</td>
            <td className={styles.tableRowItem}>{currency}</td>
        </>
    )
};

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };