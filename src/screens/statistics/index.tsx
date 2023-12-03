import React, {useState,useEffect} from 'react';
import { View, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import styles from './styles';
import DropDown from '../transaction/components/DropDown';
import { NumToMonth, scale } from '../../common/utils';
import moment from 'moment';
import { useStatistics } from './hooks';
import PaddingView from '../../common/components/padding-view';
import ScreenHeader from '../../common/components/screen-header';
import TypeContainer from '../add-expense/components/TypeContainer';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryLegend, VictoryAxis } from 'victory-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


const Statistics = () => {
  const [month, setMonth] = useState<number>(Number(moment().format('M')))
  const [year, setYear] = useState<number>(Number(moment().format('y')))


  console.log(Number(moment().format('y')), Number(moment().format('M')))

  const [month2, setMonth2] = useState<number>(0)
  const [year2, setYear2] = useState<number>(0)
  const [isCompare, setIsCompare] = useState(false)

  const handleCompareCta = (isChecked : boolean) => {
    setIsCompare(isChecked)
    if(!isChecked){
      return;
    }
    setMonth2(month)
    setYear2(year)
  }

  const {categoryWiseData, expenseType, setExpenseType, monthOptions, yearOptions, compareData} = useStatistics(year,month,year2,month2)
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

          {
            isCompare && (
              <View style={{marginLeft: scale(22), flexDirection:'row'}}>
                <DropDown options={monthOptions} selectedValue={NumToMonth[month2]} onValueChange={setMonth2}/>
                <DropDown options={yearOptions} selectedValue={year2.toString()} onValueChange={setYear2}/>
              </View>
            )
          }
        </View>
        <BouncyCheckbox
          size={25}
          fillColor="gray"
          unfillColor="#FFFFFF"
          text="Compare"
          iconStyle={{ borderColor: "gray"}}
          innerIconStyle={{ borderWidth: 2 }}
          textStyle={{ textDecorationLine: "none"}}
          onPress={(isChecked: boolean) => handleCompareCta(isChecked)}
        />
        {
          !isCompare ? <>
            {
              categoryWiseData?.length > 0 ? (
              <View style={styles.pieChartContainer}>
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
                  backgroundColor="transparent"
                  paddingLeft="15"
                  style={styles.chart}
                />
              </View>
              ) : (
                <View style={styles.noTransaction}>
                  <Text>No Transactions</Text>
                </View>
              )
            }

          </> : <>
          <View style={styles.barchartContainer}>
            <VictoryChart  width={Dimensions.get('screen').height - scale(250)}>
              <VictoryAxis label="Category" style={{axisLabel: {padding: 35}}}/>
              <VictoryAxis dependentAxis label="Percent" style={{axisLabel: {padding: 35}}}/>
              <VictoryGroup offset={20}>
                <VictoryBar 
                  data={compareData.month1}
                  style={{data:{fill:'blue'}}}
                />
                <VictoryBar 
                  data={compareData.month2}
                  style={{data:{fill:'orange'}}}
                />
              </VictoryGroup>

              <VictoryLegend 
                x={Dimensions.get('screen').width /2 - 110}
                gutter={20}
                orientation='horizontal'
                data={[
                  {
                    name: `${NumToMonth[month]} ${year}`,
                    symbol:{fill:'blue'}
                  },
                  {
                    name: `${NumToMonth[month2]} ${year2}`,
                    symbol:{fill:'orange'}
                  }
                ]}
              />
            </VictoryChart>
          </View>
          </>
        }
      </PaddingView>
    </>
    
  );
};

export default Statistics;
