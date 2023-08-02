import { renderHook } from "@testing-library/react";
import useRequestAllTransactions from "../../utils/hooks/useRequestAllTransactions";

describe('useRequestAllTransactions hook', () => {
    it('should render correct states', () => {
        const { result } = renderHook(() => useRequestAllTransactions())
        const [transactionsGroupByCustomer, customers, timePeriod] = result.current;
        expect(transactionsGroupByCustomer).toBeInstanceOf(Object);        
        expect(Array.isArray(customers)).toBe(true);
        expect(Array.isArray(timePeriod)).toBe(true);
    });
})