import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchRewardBar from '../../components/SearchRewardBar/SearchRewardBar';

describe('SearchRewardBar', () => {
    it('should render select month and realize its function', () => {
        const customers = ['A2BS4F', 'CB1S11', 'T367KB', 'T8JF91', 'T8R11E'];
        const timePeriod = ['April 2023', 'March 2023', 'February 2023'];
        const customerFn = jest.fn();
        const timePeriodFn = jest.fn();
        const {getByTestId, getAllByTestId} = render(<SearchRewardBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonth={timePeriodFn}/>);
        fireEvent.change(getByTestId("reward-app_search_select-month"), {target: {value: "March 2023"}});
        const monthOptions = getAllByTestId("reward-app_search_month-option");
        expect(monthOptions).toHaveLength(3);
        expect(monthOptions[0].selected).toBeFalsy();
        expect(monthOptions[1].selected).toBeTruthy();
        expect(monthOptions[2].selected).toBeFalsy();
        expect(timePeriodFn).toHaveBeenCalledTimes(1);
    });

    it('should render select customer and realize its function', () => {
        const customers = ['A2BS4F', 'CB1S11', 'T367KB', 'T8JF91', 'T8R11E'];
        const timePeriod = ['April 2023', 'March 2023', 'February 2023'];
        const customerFn = jest.fn();
        const timePeriodFn = jest.fn();
        const {getByTestId, getAllByTestId} = render(<SearchRewardBar customers={customers} timePeriod={timePeriod} setSelectedCustomer={customerFn} setSelectedMonth={timePeriodFn}/>);
        fireEvent.change(getByTestId("reward-app_search_select-customer"), {target: {value: "CB1S11"}});
        const monthOptions = getAllByTestId("reward-app_search_customer-option");
        expect(monthOptions).toHaveLength(5);
        expect(monthOptions[0].selected).toBeFalsy();
        expect(monthOptions[1].selected).toBeTruthy();
        expect(monthOptions[2].selected).toBeFalsy();
        expect(monthOptions[3].selected).toBeFalsy();
        expect(monthOptions[4].selected).toBeFalsy();
        expect(customerFn).toHaveBeenCalledTimes(1);
    });
})
