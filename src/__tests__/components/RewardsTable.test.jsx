import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RewardsTable from '../../components/RewardsTable/RewardsTable';

describe('should show total rewards', () => {
    it('should render total reward', () => {
        const transactions = [
            {
                transactionId: 'c13f6d1b-7ce4-4cbb-9259-413f2e77289d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '29 April 2023 14:15:30 UTC-05:00',
                payment: 59,
                currency: '$',
                purchaseItems: ['Crab Cake', 'Fried Chicken', 'Pizza'],
                reward: 9,
            },
            {
                transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
                payment: 31,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: 'ee02b3ba-202b-4df3-a5da-29ca30b94c29',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '24 April 2023 14:15:30 UTC-05:00',
                payment: 49,
                currency: '$',
                purchaseItems: ['Cooking tool', 'Vinegar', 'Olive Oil'],
                reward: 0
            }, 
            {
                transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
                payment: 1002,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 1854
            }, 
            {
                transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
                payment: 9,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
                payment: 39,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
                payment: 429,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 708
            }, 
            {
                transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
                payment: 57,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 7
            }, 
            {
                transactionId: '9ddd7b04-707d-47b2-b3f5-f97b8846dfef',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '08 March 2023 14:25:30 UTC-05:00',
                payment: 95,
                currency: '$',
                purchaseItems: ['Lamb', 'Beer', 'Wine', 'Whisky'],
                reward: 45
            },
            {
                transactionId: '59c48436-ec12-4397-8de4-1a02969299a0',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '01 March 2023 14:25:30 UTC-05:00',
                payment: 33,
                currency: '$',
                purchaseItems: ['Gala Apple', 'Pepsi', 'Instant Rice'],
                reward: 0
            },
            {
                transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
                payment: 178,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 206
            }, 
            {
                transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
                payment: 205,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 260
            }, 
            {
                transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
                payment: 34,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            },
            {
                transactionId: '1bd8a86d-8fde-47d5-9e65-c65ba27d280d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '07 February 2023 14:25:30 UTC-05:00',
                payment: 18,
                currency: '$',
                purchaseItems: ['Lemon', 'Green Grape'],
                reward: 0
            }, 
            {
                transactionId: 'b311e1af-cd8d-4a99-96b6-e74e429ef1c4',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '03 February 2023 14:25:30 UTC-05:00',
                payment: 95,
                currency: '$',
                purchaseItems: ['Cake', 'White Wine', 'Steak'],
                reward: 45
            },
        ];
        const rewardsTable = render(<RewardsTable transactions={transactions}/>);
        const totalRewardsElement = rewardsTable.queryByText('Total Rewards: 3134');
        expect(totalRewardsElement).toBeInTheDocument();
    });
    
    it('should render available rewards table following transactions', () => {
        const timePeriod = ["April 2023", "March 2023", "February 2023"];
        const transactions = [
            {
                transactionId: 'c13f6d1b-7ce4-4cbb-9259-413f2e77289d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '29 April 2023 14:15:30 UTC-05:00',
                payment: 59,
                currency: '$',
                purchaseItems: ['Crab Cake', 'Fried Chicken', 'Pizza'],
                reward: 9,
            },
            {
                transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
                payment: 31,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: 'ee02b3ba-202b-4df3-a5da-29ca30b94c29',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '24 April 2023 14:15:30 UTC-05:00',
                payment: 49,
                currency: '$',
                purchaseItems: ['Cooking tool', 'Vinegar', 'Olive Oil'],
                reward: 0
            }, 
            {
                transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
                payment: 1002,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 1854
            }, 
            {
                transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
                payment: 9,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
                payment: 39,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            }, 
            {
                transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
                payment: 429,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 708
            }, 
            {
                transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
                payment: 57,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 7
            }, 
            {
                transactionId: '9ddd7b04-707d-47b2-b3f5-f97b8846dfef',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '08 March 2023 14:25:30 UTC-05:00',
                payment: 95,
                currency: '$',
                purchaseItems: ['Lamb', 'Beer', 'Wine', 'Whisky'],
                reward: 45
            },
            {
                transactionId: '59c48436-ec12-4397-8de4-1a02969299a0',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '01 March 2023 14:25:30 UTC-05:00',
                payment: 33,
                currency: '$',
                purchaseItems: ['Gala Apple', 'Pepsi', 'Instant Rice'],
                reward: 0
            },
            {
                transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
                payment: 178,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 206
            }, 
            {
                transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
                payment: 205,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 260
            }, 
            {
                transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
                payment: 34,
                currency: '$',
                purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle'],
                reward: 0
            },
            {
                transactionId: '1bd8a86d-8fde-47d5-9e65-c65ba27d280d',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '07 February 2023 14:25:30 UTC-05:00',
                payment: 18,
                currency: '$',
                purchaseItems: ['Lemon', 'Green Grape'],
                reward: 0
            }, 
            {
                transactionId: 'b311e1af-cd8d-4a99-96b6-e74e429ef1c4',
                customerId: 'T8R11E',
                customerName: 'Timmy Blue',
                purchaseTime: '03 February 2023 14:25:30 UTC-05:00',
                payment: 95,
                currency: '$',
                purchaseItems: ['Cake', 'White Wine', 'Steak'],
                reward: 45
            },
        ];
        render(<RewardsTable transactions={transactions}/>);
        const transactionRow = screen.getAllByTestId('table_transaction');
        expect(transactionRow).toHaveLength(15);
    });
})
