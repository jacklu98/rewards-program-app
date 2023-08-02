import { useEffect, useState } from "react";
import { calculateReward, findTimePeriod } from "../index";

export default function useRequestAllTransactions(fetcher) {
    const [transactions, setTransactions] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [timePeriod, setTimePeriod] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        fetcher()
            .then(data => {
                // find the month of reward time period
                const months = findTimePeriod(data);

                // find unique customer ID
                const records = new Set();
                data.forEach(element => {
                    if (!records.has(element.customerId)) {
                        records.add(element.customerId)
                    }
                    // calculate reward for every transaction
                    const elementReward = calculateReward(element.payment);
                    element["reward"] = elementReward;
                });
                setTransactions(data);
                setCustomers([...records.keys()]);
                setTimePeriod(months);
            })
            .catch(err => {
                setErrorMsg(err);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [fetcher])

    return [transactions, customers, timePeriod, isLoading, errorMsg];
}