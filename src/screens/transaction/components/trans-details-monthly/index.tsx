import { View, Text, SectionList } from 'react-native'
import React, {useEffect, useMemo} from 'react'
import mockTransaction from '../../../../mock';
import { TransactionInterface } from '../../../../common/interface';
import Trans from '../trans';
import TransHeader from '../trans-header';
import { useTransDetailsMonthly } from './hooks';

interface Props {
  month: number;
  year: number;
}

interface TransactionByDayInterface {
  [key: string] : TransactionInterface[]
}

const TransDetailsDaily = ({month, year}: Props) => {

  const {sections} = useTransDetailsMonthly(mockTransaction,month,year)

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