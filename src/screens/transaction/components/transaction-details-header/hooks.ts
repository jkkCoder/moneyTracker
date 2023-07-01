import { TransactionInterface } from "../../../../common/interface";

export const useTransactionDetailsHeader = (transactionData:TransactionInterface[],month:number, year:number) => {
  const filteredTransactionData = transactionData?.filter( dt => dt?.month === month && dt?. year === year) || []

  const expense = filteredTransactionData?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'expense'){
        acc += item?.amount
    }
    return acc;
  },0)

  const income = filteredTransactionData?.reduce((acc,item) => {
    if(item?.type?.toLowerCase() === 'income'){
        acc += item?.amount
    }
    return acc;
  },0)

  return {
    income,
    expense
  }
}