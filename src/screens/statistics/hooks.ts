import moment from "moment";
import {useCallback, useEffect,useState} from "react"
import { getData, pieColors, randomColor } from "../../common/utils";
import { TransactionInterface } from "../../common/interface";
import { useFocusEffect } from "@react-navigation/native";

interface CategoryWiseData {
    name: string;
    type:string;
    totalAmount:number;
    color:string;
    legendFontColor: string;
    legendFontSize:number;
}

export const useStatistics = (year:number, month:number) => {
    const [transactionData, setTransactionData] = useState<TransactionInterface[]>([])
    const [expenseType, setExpenseType] = useState('Expense') // Expense/Income
    useEffect(() => {
        const fetchData = async () => {
            const data = await getData()
            if(data?.success){
            setTransactionData(data?.data)
            }
        }
        fetchData()
    },[])

    useFocusEffect(
        useCallback(() => {  
            const fetchData = async () => {
            const data = await getData()
            if(data?.success){
                setTransactionData(data?.data)
            }
            }
            fetchData()
        }, [])
    );
    
    const filteredTransactionData = transactionData?.filter( dt => {
        return dt?.month === month && dt?.year === year && dt?.type?.toLowerCase() === expenseType?.toLowerCase()
    }) || []
    
    let colorIndex = 0
    const categoryWiseData:CategoryWiseData[] = filteredTransactionData.reduce((acc:CategoryWiseData[], curr) => {
        const existingCategory = acc.find(item => item.name === curr.category);
        if (existingCategory) {
          existingCategory.totalAmount += curr.amount;
        } else {
          acc.push(
            { 
                name: curr.category, 
                type: curr.type, 
                totalAmount: curr.amount,
                color: colorIndex < 15 ? pieColors[colorIndex++] : randomColor(),
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
            }
          );
        }
        return acc;
    }, []);

    const monthOptions = [
        {key: 1, label: "Jan", value: 1}, 
        {key: 2, label: "Feb", value: 2},
        {key: 3, label: "Mar", value: 3},
        {key: 4, label: "Apr", value: 4},
        {key: 5, label: "May", value: 5},
        {key: 6, label: "Jun", value: 6},
        {key: 7, label: "Jul", value: 7},
        {key: 8, label: "Aug", value: 8},
        {key: 9, label: "Sep", value: 9},
        {key: 10, label: "Oct", value: 10},
        {key: 11, label: "Nov", value: 11},
        {key: 12, label: "Dec", value: 12}
      ]
      
    const yearOptions = [];
    const currentYear = Number(moment().format('y'))
    for (let yr = 2010; yr <= currentYear; yr++) {
        yearOptions.push({ key: yr, label: yr.toString() , value: yr});
    }

    return {
        monthOptions,
        yearOptions,
        expenseType,
        setExpenseType,
        categoryWiseData
    }
}