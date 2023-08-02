import { useEffect, useState } from "react";
import RewardsTable from "./components/RewardsTable/RewardsTable";
import useRequestAllTransactions from "./utils/hooks/useRequestAllTransactions";
import SearchRewardBar from "./components/SearchRewardBar/SearchRewardBar";
import { getMonthFromDate } from "./utils";

function App() {
    const [transactions, customers, timePeriod, isLoading] = useRequestAllTransactions();
    const [selectedCustomer, setSelectedCustomer] = useState("all");
    const [selectedMonth, setSelectedMonth] = useState(null);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
      console.log("aaa", selectedCustomer, selectedMonth);
      const newTransactions = transactions.filter((transaction) => {
        let month = getMonthFromDate(transaction.purchaseTime);
        return (selectedCustomer === "all" || transaction.customerId === selectedCustomer) && (selectedMonth === null || month === selectedMonth)
      });
      console.log("bbb", newTransactions);
      setFilteredTransactions(newTransactions);
    },[transactions, selectedCustomer, selectedMonth])

    return (
        <div className="reward-app">
            <div className="reward-app_title">Reward Program</div>
            <SearchRewardBar 
              customers={customers} 
              timePeriod={timePeriod} 
              setSelectedCustomer={setSelectedCustomer} 
              setSelectedMonth={setSelectedMonth}
            />
            {isLoading ? <div>Please Wait Loading...</div> : null}
            <RewardsTable transactions={filteredTransactions}/>
        </div>
  );
}

export default App;
