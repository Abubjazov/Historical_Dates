import { FC } from 'react'
import React from 'react'

import styles from './RevoltSwitcher.module.scss'
import AnimatedDateDisplay from '../AnimatedDateDisplay/AnimatedDateDisplay'
import ButtonPad from '../ButtonPad'

export interface RevoltSwitcherProps {
  currentIndex: number
  inputDataArrayLength: number
  currentPeriod: number[]
  nextItem: () => void
  previousItem: () => void
  generateRevoltSwitcherItems: () => React.JSX.Element[]
}

const RevoltSwitcher: FC<RevoltSwitcherProps> = ({
  currentIndex,
  inputDataArrayLength,
  currentPeriod,
  nextItem,
  previousItem,
  generateRevoltSwitcherItems,
}) => {
  return (
    <div className={styles.revoltSwitcherWrapper}>
      <div
        className={styles.revoltSwitcher}
        style={{
          transition: 'transform 0.5s ease-in',
          transform: `rotate(${
            (-360 / inputDataArrayLength) * currentIndex
          }deg)`,
        }}
      >
        {generateRevoltSwitcherItems()}
      </div>

      <AnimatedDateDisplay
        startYear={currentPeriod[0]}
        endYear={currentPeriod[1]}
      />

      <ButtonPad
        currentIndex={currentIndex}
        inputDataArrayLength={inputDataArrayLength}
        previousItem={previousItem}
        nextItem={nextItem}
      />
    </div>
  )
}

export default RevoltSwitcher
