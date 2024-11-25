export function repaymentCalculator ( mAmount, mTerm, iRate ) {
    const mTermFinal = mTerm * 12;
    
    const iRateFinal = ( iRate / 100 ) / 12;

    const monthlyRepayments = ((mAmount * ( iRateFinal * (1 + iRateFinal) ** mTermFinal)) / ((1 + iRateFinal) ** mTermFinal - 1)).toFixed(2);

    const totalRepayment = (((mAmount * ( iRateFinal * (1 + iRateFinal) ** mTermFinal)) / ((1 + iRateFinal) ** mTermFinal - 1)) * mTermFinal).toFixed(2);

    return {monthlyRepayments, totalRepayment};
}

export function interestOnlyCalculator ( mAmount, mTerm, iRate ) {
    const mTermFinal = mTerm * 12;

    const iRateFinal = ( iRate / 100 ) / 12;

    const monthlyRepayments = (mAmount * iRateFinal).toFixed(2);

    const totalRepayment = (mAmount * iRateFinal * mTermFinal).toFixed(2);
    
    return {monthlyRepayments, totalRepayment};
}