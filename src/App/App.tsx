import React from 'react'

import styles from './App.module.scss'
import HistoricalDates from '../components/HistoricalDates'
import { inputDataArray } from '../mockData/mockData'

export const App: React.FC = () => {
  return (
    <div className={styles.mainWrapper}>
      <HistoricalDates inputData={inputDataArray} />
    </div>
  )
}
