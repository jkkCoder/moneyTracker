import { View, Text, SectionList } from 'react-native'
import React, {useCallback, useEffect, useMemo, useState} from 'react'
import { TransactionInterface } from '../../../../common/interface';
import Trans from '../trans';
import TransHeader from '../trans-header';
import { useTransDetailsMonthly } from './hooks';
import styles from './styles';
 
interface Props {
  transactionData: TransactionInterface[];
  month: number;
  year: number;
}

const TransDetailsDaily = ({transactionData, month, year}: Props) => {

  const {sections} = useTransDetailsMonthly(transactionData,month,year)

  return (
    <View>
      {
        sections?.length > 0 ? (
          <SectionList
            showsVerticalScrollIndicator={false}
            sections={sections?.reverse()}
            renderItem={({item}) => (
              <Trans 
                id={item?.id} 
                category={item?.category} 
                date={item?.date}
                title={item?.title} 
                description={item?.description} 
                amount={item?.amount} 
                type={item?.type}/>
            )}
            renderSectionHeader={({section}) => (
              <TransHeader date={section?.data?.[0]?.date} />
            )}
            keyExtractor={(item) => item?.id?.toString()}
            ListFooterComponent={() => (
              <View style={styles.empty}/>
            )}
          /> 
        ) : (
          <View style={styles.noData}>
            <Text>
              No Data
            </Text>
          </View>
          
        )
      }
      
    </View>
  )
}

export default TransDetailsDaily