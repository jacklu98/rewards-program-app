import '../../styles/SearchRewardBar.css';

export default function SearchCustomer({customers, setSelectedCustomer, timePeriod, setSelectedMonth}) {

    function handleInput(event) {
      setSelectedCustomer(event.target.value);
    }

    function handleMonth(event) {
      setSelectedMonth(event.target.value);
    }

    return (
        <div className="reward-app_search">
            <div className="reward-app_search_customer"> 
              <label className="reward-app_search_label">Find Rewards by Customer ID:</label>
              <select 
                className="reward-app_search_search-bar"
                data-testid="reward-app_search_select-customer"
                onChange={handleInput}
                name="reward-app_search_customer-list"
              >
                <option style={{display:"none"}}></option>
                {customers.map(customer => {
                  return (<option key={customer} value={customer} data-testid="reward-app_search_customer-option">{customer}</option>)
                })}
              </select>
            </div>
            <div className="reward-app_search_month">
              <label className="reward-app_search_label">Find Rewards by Month:</label>
              <select 
                className="reward-app_search_search-bar"
                data-testid="reward-app_search_select-month"
                name="month"
                onChange={handleMonth}
              >
                <option style={{display:"none"}}></option>
                {timePeriod.map(month => {
                  return (<option key={month} value={month} data-testid="reward-app_search_month-option">{month}</option>)
                })}
              </select>
            </div>
        </div>
    )
}