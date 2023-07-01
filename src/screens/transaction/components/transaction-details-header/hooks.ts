import { TransactionInterface } from "../../../../common/interface";

export const useTransactionDetailsHeader = (transactionData:TransactionInterface[],month:number, year:number) => {
  const filteredTransactionData = transactionData?.filter( dt => dt?.month === month && dt?. year === year) || []

  const filteredTransactionDataByYear = transactionData?.filter( dt => dt?. year === year) || []

  const expenseDaily = filteredTransactionData?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'expense'){
        acc += item?.amount
    }
    return acc;
  },0)

  const incomeDaily = filteredTransactionData?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'income'){
        acc += item?.amount
    }
    return acc;
  },0)

  const expenseYearly = filteredTransactionDataByYear?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'expense'){
        acc += item?.amount
    }
    return acc;
  },0)

  const incomeYearly = filteredTransactionDataByYear?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'income'){
        acc += item?.amount
    }
    return acc;
  },0)

  return {
    incomeDaily,
    expenseDaily,
    incomeYearly,
    expenseYearly,
  }
}