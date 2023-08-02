export function calculateTotalRewards(transactions) {
    if(!transactions) return 0;

    let totalRewards = 0;
    transactions.forEach(transaction => {
        totalRewards += transaction.reward;
    });
    return totalRewards;
}

export function calculateReward(amount) {
    let reward = 0;
    // Calculate over 100 part rewards
    if(amount > 100) {
        reward += (amount - 100) * 2;
        amount = 100;
    }
    // calculate 50 - 100 part rewards
    if(amount > 50) {
        reward += (amount - 50);
    }
    return reward
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
        const month = getMonthFromDate(transaction.purchaseTime);
        if (!months.has(month)) {
            months.add(month)
        }
    });
    return sortTimePeriodFromLatest([...months]);
}

export function getPurchaseDate(purchaseTime) {
    const time = new Date(purchaseTime);
    return time.getDate() + " " + monthMap[time.getMonth()] + " " + time.getFullYear();
}

export function getMonthFromDate(purchaseTime) {
    const time = new Date(purchaseTime);
    const month = monthMap[time.getMonth()] + " " + time.getFullYear();
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