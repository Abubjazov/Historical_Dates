import { FC } from 'react'
import React from 'react'

import SvgIcon from 'components/SvgIcon'

import styles from './ButtonPad.module.scss'

export interface ButtonPudProps {
  currentIndex: number
  inputDataArrayLength: number
  previousItem: () => void
  nextItem: () => void
}

const ButtonPad: FC<ButtonPudProps> = ({
  currentIndex,
  inputDataArrayLength,
  previousItem,
  nextItem,
}) => {
  const formatValue = (value: number) => String(value).padStart(2, '0')

  return (
    <div className={styles.revoltSwitcherButtonsPad}>
      <span className={styles.revoltSwitcherCounter}>{`${formatValue(
        currentIndex + 1,
      )}/${formatValue(inputDataArrayLength)}`}</span>

      <div className={styles.revoltSwitcherButtonsWrapper}>
        <button
          className={styles.revoltSwitcherButton}
          onClick={previousItem}
          disabled={currentIndex + 1 === 1}
          aria-label="previous period"
        >
          <SvgIcon icon={'arrowLeft'} />
        </button>

        <button
          className={styles.revoltSwitcherButton}
          onClick={nextItem}
          disabled={currentIndex + 1 === inputDataArrayLength}
          aria-label="next period"
        >
          <SvgIcon icon={'arrowRight'} />
        </button>
      </div>
    </div>
  )
}

export default ButtonPad
