import { FC } from 'react'
import React from 'react'

import styles from './ButtonPad.module.scss'
import SvgIcon from '../SvgIcon/SvgIcon'

export interface ButtonPudProps {
  currentIndex: number
  inputDataArrayLength: number
  previosItem: () => void
  nextItem: () => void
}

const ButtonPad: FC<ButtonPudProps> = ({
  currentIndex,
  inputDataArrayLength,
  previosItem,
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
          onClick={previosItem}
          disabled={currentIndex + 1 === 1}
        >
          <SvgIcon icon={'arrowLeft'} />
        </button>

        <button
          className={styles.revoltSwitcherButton}
          onClick={nextItem}
          disabled={currentIndex + 1 === inputDataArrayLength}
        >
          <SvgIcon icon={'arrowRight'} />
        </button>
      </div>
    </div>
  )
}

export default ButtonPad
