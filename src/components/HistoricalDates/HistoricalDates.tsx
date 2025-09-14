import { FC } from 'react'
import React from 'react'

import styles from './HistoricalDates.module.scss'
import { useRevoltSwitcher } from '../../hooks/useRevoltSwitcher/useRevoltSwitcher'
import { IHistoricalDates } from '../../mockData/mockData'
import Label from '../Label/Label'
import RevoltSwitcher from '../RevoltSwitcher/RevoltSwitcher'
import Slider from '../Slider/Slider'

export interface HistoricalDatesProps {
  inputData: IHistoricalDates[]
}

const HistoricalDates: FC<HistoricalDatesProps> = ({ inputData }) => {
  const {
    generateRevoltSwitcherItems,
    currentIndex,
    nextItem,
    previosItem,
    inputDataArrayLength,
    currentPeriod,
  } = useRevoltSwitcher(inputData)

  return (
    <div className={styles.wrapper}>
      <Label />

      <RevoltSwitcher
        currentIndex={currentIndex}
        inputDataArrayLength={inputDataArrayLength}
        currentPeriod={currentPeriod}
        nextItem={nextItem}
        previosItem={previosItem}
        generateRevoltSwitcherItems={generateRevoltSwitcherItems}
      />

      <Slider />

      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  )
}

export default HistoricalDates
