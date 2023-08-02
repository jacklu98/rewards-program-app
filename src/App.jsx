import { useState, useMemo } from "react";
import RewardsTable from "./components/RewardsTable/RewardsTable";
import useRequestAllTransactions from "./utils/hooks/useRequestAllTransactions";
import SearchRewardBar from "./components/SearchRewardBar/SearchRewardBar";
import { getAllTransactions } from "./api/mockApi";
import { getMonthFromDate } from "./utils";

function App() {
  const [transactions, customers, timePeriod, isLoading, errorMsg] = useRequestAllTransactions(getAllTransactions);
  const [selectedCustomer, setSelectedCustomer] = useState("all");
  const [selectedMonth, setSelectedMonth] = useState("all");

  const filteredTransactions = useMemo(() => {
    return transactions.filter((transaction) => {
      let month = getMonthFromDate(transaction.purchaseTime);
      return (selectedCustomer === "all" || transaction.customerId === selectedCustomer) && (selectedMonth === "all" || month === selectedMonth)
    });
  }, [transactions, selectedCustomer, selectedMonth]);

  // If api response error, show error message in the page
  if (errorMsg) return (<div>{errorMsg}</div>);

  return (
    <div className="reward-app">
      <div className="reward-app_title">Reward Program</div>
      <SearchRewardBar
        customers={customers}
        timePeriod={timePeriod}
        setSelectedCustomer={setSelectedCustomer}
        setSelectedMonth={setSelectedMonth}
      />
      {isLoading ? <div>Please Wait Loading...</div> :
        <RewardsTable transactions={filteredTransactions} />
      }
    </div>
  );
}

export default App;
