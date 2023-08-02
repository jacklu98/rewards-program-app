export function calculateTotalRewards(transactions) {
    if(!transactions) return 0;

    let totalRewards = 0;
    transactions.forEach(transaction => {
        totalRewards += transaction.reward;
    });
    return totalRewards;
}

export function calculateReward(transaction) {
    let pay = transaction.purchaseMoney;
    let value = 0;
    // Calculate over 100 part rewards
    if(pay > 100) {
        value += (pay - 100) * 2;
        pay = 100;
    }
    // calculate 50 - 100 part rewards
    if(pay > 50) {
        value += (pay - 50);
    }
    transaction["reward"] = value;
    return transaction;
}

const monthMap = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

export function findTimePeriod(transactions) {
    const months = new Set();
    transactions.forEach(transaction => {
        const time = transaction.purchaseTime.split(' ');
        const month = time[1] + " " + time[2];
        if (!months.has(month)) {
            months.add(month)
        }
    });
    return sortTimePeriodFromLatest([...months]);
}

export function getPurchaseDate(purchaseTime) {
    const time = purchaseTime.split(' ');
    const date = time[0] + " " + time[1] + " " + time[2];
    return date;
}

export function getMonthFromDate(purchaseTime) {
    const time = purchaseTime.split(' ');
    const month = time[1] + " " + time[2];
    return month;
}

export function sortTimePeriodFromLatest(timePeriod) {
    return timePeriod.sort((timeA, timeB) => {
        const [monthA, yearA] = timeA.split(' ');
        const [monthB, yearB] = timeB.split(' ');
        if(Number(yearA) !== Number(yearB)) return Number(yearB) - Number(yearA);
        return monthMap.indexOf(monthB) - monthMap.indexOf(monthA);
    })
}