import { useEffect, useMemo } from "react";
import { TransactionInterface } from "../../../../common/interface";

interface TransactionByDayInterface {
    [key: string] : TransactionInterface[]
}

export const useTransDetailsMonthly = (
    transactionData: TransactionInterface[],
    month:number, 
    year:number, 
) => {
    const filteredExpense = transactionData.filter( exp => {
    return exp?.month === month && exp?.year === year;
    })

    const transactionsByDay = {} as TransactionByDayInterface;
    filteredExpense?.forEach(exp => {
    if(!transactionsByDay[exp?.day?.toString()]){
        transactionsByDay[exp?.day?.toString()] = []
    }

    transactionsByDay[exp?.day?.toString()].push(exp)
    })

    //sorted transaction by day
    const sortedTransactionsByDay = useMemo(() => {
        const sortedTransactions = {} as TransactionByDayInterface;

        Object.keys(transactionsByDay)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .forEach(day => {
            sortedTransactions[day] = transactionsByDay[day];
            });

        return sortedTransactions;
    }, [transactionsByDay]);

    //data for section list
    const sections = Object.keys(sortedTransactionsByDay).map(day => ({
    title: `Day ${day}`,
    data: transactionsByDay[day],
    }));

    return {
        sections
    }
}