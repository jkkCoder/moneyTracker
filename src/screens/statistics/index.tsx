import React, {useState,useEffect} from 'react';
import { View, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './styles';
import DropDown from '../transaction/components/DropDown';
import { NumToMonth } from '../../common/utils';
import moment from 'moment';
import { useStatistics } from './hooks';
import PaddingView from '../../common/components/padding-view';
import ScreenHeader from '../../common/components/screen-header';
import TypeContainer from '../add-expense/components/TypeContainer';


const Statistics = () => {
  const [month, setMonth] = useState<number>(0)
  const [year, setYear] = useState<number>(0)

  useEffect(() => {
    setMonth(Number(moment().format('M')))
    setYear(Number(moment().format('y')))
  },[])

  const {categoryWiseData, expenseType, setExpenseType, monthOptions, yearOptions} = useStatistics(year,month)
  return (
    <>
      <ScreenHeader title="Statistics" />
      <PaddingView>
        <View style={styles.typeContainer}>
          <TypeContainer expenseType={expenseType} setExpenseType={setExpenseType} txt="Expense" selected={expenseType === 'Expense'} />
          <TypeContainer expenseType={expenseType} setExpenseType={setExpenseType} txt="Income" selected={expenseType === 'Income'} />
        </View>
        <View style={styles.dropDownContainer}>
          <DropDown options={monthOptions} selectedValue={NumToMonth[month]} onValueChange={setMonth}/>
          <DropDown options={yearOptions} selectedValue={year.toString()} onValueChange={setYear}/>
        </View>
        {
          categoryWiseData?.length > 0 ? (
            <PieChart
              data={categoryWiseData}
              width={300}
              height={200}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#ffffff',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0,
                
                color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              }}
              accessor="totalAmount"
              backgroundColor="#FFFFFF"
              paddingLeft="15"
              absolute
              style={styles.chart}
            />
          ) : (
            <View style={styles.noTransaction}>
              <Text>No Transactions</Text>
            </View>
          )
        }
      </PaddingView>
    </>
    
  );
};

export default Statistics;
