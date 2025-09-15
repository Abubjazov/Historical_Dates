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
    delayedCurrentIndex,
    nextItem,
    previosItem,
    INPUT_DATA_ARRAY_LENGTH,
    currentPeriod,
    currentEvents,
  } = useRevoltSwitcher(inputData, 20)

  return (
    <div className={styles.wrapper}>
      <Label />

      <RevoltSwitcher
        currentIndex={currentIndex}
        inputDataArrayLength={INPUT_DATA_ARRAY_LENGTH}
        currentPeriod={currentPeriod}
        nextItem={nextItem}
        previosItem={previosItem}
        generateRevoltSwitcherItems={generateRevoltSwitcherItems}
      />

      <Slider
        events={currentEvents}
        currentIndex={currentIndex}
        delayedCurrentIndex={delayedCurrentIndex}
      />

      <div className={styles.verticalLine}></div>
      <div className={styles.horizontalLine}></div>
    </div>
  )
}

export default HistoricalDates
