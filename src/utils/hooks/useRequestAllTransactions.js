import { useEffect, useState } from "react";
import { getAllTransactions } from "../../api/mockApi";
import { calculateReward, findTimePeriod } from "../index";

export default function useRequestAllTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [timePeriod, setTimePeriod] = useState([]);
    const [isLoading, setIsLoading] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        getAllTransactions()
            .then(data => {
                // find the month of reward time period
                const months = findTimePeriod(data);

                // split transactions to every customer
                const records = new Set();
                data.forEach(element => {
                    if (!records.has(element.customerId)) {
                        records.add(element.customerId)
                    }
                    // calculate reward for every transaction
                    element = calculateReward(element);
                });
                setIsLoading(false);
                setTransactions(data);
                console.log(data);
                setCustomers([...records.keys()]);
                setTimePeriod(months);
            })
            .catch(err => {
                setIsLoading(false);
                console.log(err)
            });
    }, [])

    return [transactions, customers, timePeriod, isLoading];
}