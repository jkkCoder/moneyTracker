import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {useState, useEffect, useCallback} from "react"
import { TransactionInterface } from "../../common/interface";
import { useTransactionDetailsHeader } from "./components/transaction-details-header/hooks";
import { getData } from "../../common/utils";
import moment from "moment";

export const useTransaction = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)
  const [tabIndex, setTabIndex] = useState<number>(0)
  const [transactionData, setTransactionData] = useState<TransactionInterface[]>([])

  const {incomeDaily,expenseDaily,incomeYearly, expenseYearly} = useTransactionDetailsHeader(transactionData,month,year)

  useFocusEffect(
    useCallback(() => {  
      const fetchData = async () => {
        const data = await getData()
        if(data?.success){
          setTransactionData(data?.data ||[])
        }
      }
      fetchData()
    }, [])
  );

  useEffect(() => {
    setMonth(Number(moment().format('M')))
    setYear(Number(moment().format('y')))
  },[tabIndex])

  const handleNavigator = () => {
    navigation.navigate('addExpense',{
      method: 'create'
    })
  }

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
        
    }
}