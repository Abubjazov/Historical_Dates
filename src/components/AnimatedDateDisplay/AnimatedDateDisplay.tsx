import { FC, useEffect, useState } from 'react'
import React from 'react'

import styles from './AnimatedDateDisplay.module.scss'

export interface AnimatedDateDisplayProps {
  startYear: number
  endYear: number
}

const AnimatedDateDisplay: FC<AnimatedDateDisplayProps> = ({
  startYear,
  endYear,
}) => {
  const [startYearValue, setStartYearValue] = useState(startYear)
  const [endYearValue, setEndYearYearValue] = useState(endYear)

  useEffect(() => {
    if (startYearValue !== startYear && startYearValue < startYear) {
      const setTimeOutID = setTimeout(setStartYearValue, 50, startYearValue + 1)

      return () => clearTimeout(setTimeOutID)
    }

    if (startYearValue !== startYear && startYearValue > startYear) {
      const setTimeOutID = setTimeout(setStartYearValue, 50, startYearValue - 1)

      return () => clearTimeout(setTimeOutID)
    }
  }, [startYearValue, startYear])

  useEffect(() => {
    if (endYearValue !== endYear && endYearValue < endYear) {
      const setTimeOutID = setTimeout(setEndYearYearValue, 50, endYearValue + 1)

      return () => clearTimeout(setTimeOutID)
    }

    if (endYearValue !== endYear && endYearValue > endYear) {
      const setTimeOutID = setTimeout(setEndYearYearValue, 50, endYearValue - 1)

      return () => clearTimeout(setTimeOutID)
    }
  }, [endYearValue, endYear])

  return (
    <div className={styles.displayWrapper}>
      <span className={styles.startYear}>{startYearValue}</span>
      <span className={styles.endYear}>{endYearValue}</span>
    </div>
  )
}

export default AnimatedDateDisplay
