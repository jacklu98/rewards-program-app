import { calculateTotalRewards, getPurchaseDate } from "../../utils";
import '../../styles/RewardsTable.css';

export default function RewardsTable({transactions}) {
    if(!transactions) return;
    
    // count total rewards of month
    const totalRewards = calculateTotalRewards(transactions);

    return (
        <div className="reward-app_rewards"  data-testid="reward-app_rewards">
            <div className="reward-app_total-rewards">{`Total Rewards: ${totalRewards}`}</div>
            <table className="reward-app_rewards-table">
                <thead>
                    <tr>
                        <th className="customer-id">Customer ID</th>
                        <th className="transaction-id">Transaction ID</th>
                        <th className="purchase-time">Purchase Date</th>
                        <th className="purchase-money">Pay Amount</th>                            
                        <th className="reward">Reward</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map(transaction => {
                            return(
                                <tr key={transaction.transactionId} data-testid="table_transaction">
                                    <td className="customer-id">{transaction.customerId}</td>
                                    <td className="transaction-id">{transaction.transactionId}</td>
                                    <td className="purchase-time">{getPurchaseDate(transaction.purchaseTime)}</td>
                                    <td className="purchase-money">{transaction.currency + transaction.payment}</td>
                                    <td className="reward">{transaction.reward}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}