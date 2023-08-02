import { calculateReward, findTimePeriod, calculateTotalRewards, sortTimePeriodFromLatest } from '../../utils/index';
import '../../utils/index';

test('there is no reward for purchase money equal or less than 50 ', () => {
    const transaction = {
        purchaseMoney: 12
    };
    const result = calculateReward(transaction);
    expect(result.reward).toBe(0);
});

test('the purchase of 50 will not earn reward', () => {
    const transaction = {
        purchaseMoney: 50
    };
    const result = calculateReward(transaction);
    expect(result.reward).toBe(0);
})

test('the part of purchase money over 50 and equal less than 100 should earn 1 point reward', () => {
    const transaction = {
        purchaseMoney: 83
    };
    const result = calculateReward(transaction);
    expect(result.reward).toBe(33)
})

test('the purchase of 100 will earn 50 rewards', () => {
    const transaction = {
        purchaseMoney: 100
    };
    const result = calculateReward(transaction);
    expect(result.reward).toBe(50)
})

test('the part of purchase money over 100 should earn 2 point reward and plus 1 point reward from 50-100 part', () => {
    const transaction = {
        purchaseMoney: 134
    };
    const result = calculateReward(transaction);
    expect(result.reward).toBe(118)
})

test('should calculate total rewards of all transactions in the array', () => {
    const transactions = [
        {
            transactionId: '0bd981b8-2ece-4c5f-a863-fedc6da3b90a',
            customerId: 'T8R11E',
            purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
            purchaseMoney: 31,
            reward: 0,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: '3573f834-6481-46ab-b8a8-61188475c827',
            customerId: 'T8R11E',
            purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
            purchaseMoney: 1002,
            reward: 852,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: '1a3bcf1a-3a64-4546-8e1e-f8668e2e4fc2',
            customerId: 'T8R11E',
            purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
            purchaseMoney: 9,
            reward: 0,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: '11f76a4f-07aa-435a-9b4e-df80b18aecf5',
            customerId: 'T8R11E',
            purchaseTime: '10 March 2023 14:25:30 UTC-05:00',
            purchaseMoney: 39,
            reward: 0,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: '24279c53-6abd-4e3d-a712-4dff2a049cf2',
            customerId: 'T8R11E',
            purchaseTime: '11 March 2023 14:15:30 UTC-05:00',
            purchaseMoney: 429,
            reward: 279,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: 'd6fd9057-d491-4f39-b87b-8310abe729b8',
            customerId: 'T8R11E',
            purchaseTime: '20 March 2023 14:15:30 UTC-05:00',
            purchaseMoney: 57,
            reward: 7,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: 'cf24abd1-59e1-4950-8284-d33ea38699ad',
            customerId: 'T8R11E',
            purchaseTime: '10 February 2023 14:25:30 UTC-05:00',
            purchaseMoney: 178,
            reward: 206,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: 'b96305da-c01b-472f-bc8f-e401bd92646b',
            customerId: 'T8R11E',
            purchaseTime: '11 February 2023 14:15:30 UTC-05:00',
            purchaseMoney: 205,
            reward: 260,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
        {
            transactionId: 'f5d90b31-0446-4a6d-bd87-2791ea1bc55d',
            customerId: 'T8R11E',
            purchaseTime: '20 February 2023 14:15:30 UTC-05:00',
            purchaseMoney: 84,
            reward: 34,
            purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
        }, 
    ];
    const totalRewards = calculateTotalRewards(transactions);
    expect(totalRewards).toBe(1638);
})

test('should return time period from transactions', () => {
    const transacitons = [{
        transactionId: 1,
        customerId: 1,
        purchaseTime: '1 February 2023 03:15:30 UTC-05:00',
        purchaseMoney: 125,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 2,
        customerId: 1,
        purchaseTime: '1 February 2023 09:15:30 UTC-05:00',
        purchaseMoney: 125,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 3,
        customerId: 1,
        purchaseTime: '13 February 2023 13:15:30 UTC-05:00',
        purchaseMoney: 25,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 4,
        customerId: 1,
        purchaseTime: '1 March 2023 23:15:30 UTC-05:00',
        purchaseMoney: 85,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 5,
        customerId: 1,
        purchaseTime: '19 March 2023 15:15:30 UTC-05:00',
        purchaseMoney: 100,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 6,
        customerId: 1,
        purchaseTime: '21 March 2023 13:15:30 UTC-05:00',
        purchaseMoney: 125,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 7,
        customerId: 1,
        purchaseTime: '10 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 225,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    },
    {
        transactionId: 8,
        customerId: 2,
        purchaseTime: '10 April 2023 14:25:30 UTC-05:00',
        purchaseMoney: 225,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 9,
        customerId: 2,
        purchaseTime: '11 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 225,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }, 
    {
        transactionId: 10,
        customerId: 2,
        purchaseTime: '20 April 2023 14:15:30 UTC-05:00',
        purchaseMoney: 225,
        purchaseItems: ['Lysol Wipe', 'Green Grape', 'Instant Noodle']
    }];
    const resultArray = findTimePeriod(transacitons);
    expect(resultArray[0]).toBe("April 2023");
    expect(resultArray[1]).toBe("March 2023");
    expect(resultArray[2]).toBe("February 2023");
})

test('should sort month array start from latest', () => {
    const timePeriod = ['March 2022', 'April 2023', 'February 2023', 'May 2022', 'April 2021'];
    const sortedTimePeriod = sortTimePeriodFromLatest(timePeriod);
    expect(sortedTimePeriod[0]).toBe("April 2023");
    expect(sortedTimePeriod[1]).toBe("February 2023");
    expect(sortedTimePeriod[2]).toBe("May 2022");
    expect(sortedTimePeriod[3]).toBe("March 2022");
    expect(sortedTimePeriod[4]).toBe("April 2021");
})
