import { FC } from 'react'
import React from 'react'

import styles from './AnimatedDateDisplay.module.scss'
import { useAnimatedDateDisplay } from '../../hooks/useAnimatedDateDisplay/useAnimatedDateDisplay'

export interface AnimatedDateDisplayProps {
  startYear: number
  endYear: number
}

const AnimatedDateDisplay: FC<AnimatedDateDisplayProps> = ({
  startYear,
  endYear,
}) => {
  const { currentValue: startYearValue } = useAnimatedDateDisplay(startYear, 50)
  const { currentValue: endYearValue } = useAnimatedDateDisplay(endYear, 50)

  return (
    <div className={styles.displayWrapper}>
      <span className={styles.startYear}>{startYearValue}</span>
      <span className={styles.endYear}>{endYearValue}</span>
    </div>
  )
}

export default AnimatedDateDisplay
