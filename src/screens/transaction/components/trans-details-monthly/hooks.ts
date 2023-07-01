import { TransactionInterface } from "../../../../common/interface";

interface TransactionByYearInterface {
    [key: string] : TransactionInterface[]
}

export const useTransDetailsMonthly = (
    transactions: TransactionInterface[],
    year:number
) => {
  const filteredData = transactions.filter((transaction) => transaction.year === year);

  const transDetailsMonthly: TransactionByYearInterface = {}
  for(let i = 1; i <= 12; i++){
    transDetailsMonthly[i] = []
  }

  filteredData?.forEach(data => {
    transDetailsMonthly[data?.month].push(data)
  })
  console.log("sorted data is ", transDetailsMonthly)

  return {
    transDetailsMonthly
  };
}