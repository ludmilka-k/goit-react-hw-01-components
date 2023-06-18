import PropTypes from 'prop-types';
import styles from './Transaction-history.module.css';
import {TransactionItem} from './Transaction-item.js'

export const TransactionHistory = ({items}) => {
    return (
        <table className={styles.transactionHistory}>
            <thead className={styles.tableHead}>
                <tr>
                    <th className={styles.tableHeadItem}>Type</th>
                    <th className={styles.tableHeadItem}>Amount</th>
                    <th className={styles.tableHeadItem}>Currency</th>
                </tr>
            </thead>

            <tbody>
            {items.map(item =>  
                <tr className={styles.tableRow} key={item.id}>
                    <TransactionItem
                        id={item.id}
                        type={item.type}
                        amount={item.amount}
                        currency={item.currency}
                    />
                </tr>
            )}
            </tbody>
        </table>
    )
};

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
          })
    ).isRequired
};