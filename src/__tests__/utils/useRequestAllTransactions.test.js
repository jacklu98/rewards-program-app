import { renderHook, waitFor, act } from "@testing-library/react";
import useRequestAllTransactions from "../../utils/hooks/useRequestAllTransactions";
import { transactions as mockData, getAllTransactions } from "../../api/mockApi";

function requestFail() {
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("request failed"), 1000);     
    })
}

describe('useRequestAllTransactions hook', () => {
    it('should render loading status and correct states', async() => {
        const { result } = renderHook(() => useRequestAllTransactions(getAllTransactions));
        const [transactions, customers, timePeriod, isLoading, errorMsg] = result.current;
        expect(transactions).toEqual([]);        
        expect(customers).toEqual([]); 
        expect(timePeriod).toEqual([]);
        expect(errorMsg).toBeNull();
        expect(isLoading).toBe(true);

        await waitFor(() =>expect(result.current[0]).toEqual(mockData), {timeout:1500});
        
        expect(result.current[1]).toEqual(['T8R11E', 'A2BS4F', 'CB1S11', 'T8JF91', 'T367KB', 'CBUT4A']); 
        expect(result.current[2]).toEqual(['April 2023', 'March 2023', 'February 2023']);
        expect(result.current[3]).toBe(false);
        expect(result.current[4]).toBeNull();
    });
    it("should show error message after request fail", async() => {
        const { result } = renderHook(() => useRequestAllTransactions(requestFail));
        await waitFor(() => expect(result.current[3]).toBe(false), {timeout:1500});
        expect(result.current[4]).toBeTruthy();
    })
})