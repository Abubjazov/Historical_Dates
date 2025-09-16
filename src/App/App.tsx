import React from 'react'

import HistoricalDates from 'components/HistoricalDates'
import { inputDataArray } from 'mockData/mockData'

import styles from './App.module.scss'

export const App: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <HistoricalDates inputData={inputDataArray} />
    </div>
  )
}
