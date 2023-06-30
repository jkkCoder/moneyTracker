import { View, Text, SectionList } from 'react-native'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { TransactionInterface } from '../../../../common/interface';
import Trans from '../trans';
import TransHeader from '../trans-header';
import { useTransDetailsMonthly } from './hooks';
import { getData } from '../../../../common/utils';
import { useFocusEffect } from '@react-navigation/native';

interface Props {
  month: number;
  year: number;
}

const TransDetailsDaily = ({month, year}: Props) => {

  const [transactionData, setTransactionData] = useState<TransactionInterface[]>([])
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


  const {sections} = useTransDetailsMonthly(transactionData,month,year)

  return (
    <View>
      <SectionList
        sections={sections}
        renderItem={({item}) => (
          <Trans 
            id={item?.id} 
            category={item?.category} 
            title={item?.title} 
            description={item?.description} 
            amount={item?.amount} 
            type={item?.type}/>
        )}
        renderSectionHeader={({section}) => (
          <TransHeader date={section?.data?.[0]?.date} />
        )}
        keyExtractor={(item) => item?.id?.toString()}
      />
    </View>
  )
}

export default TransDetailsDaily