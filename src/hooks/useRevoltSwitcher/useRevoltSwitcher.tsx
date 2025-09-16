import { useEffect, useState } from 'react'
import React from 'react'

import { nanoid } from 'nanoid'

import styles from '../../components/RevoltSwitcher/RevoltSwitcher.module.scss'
import { IHistoricalDates } from '../../mockData/mockData'

export const useRevoltSwitcher = (
  inputDataArray: IHistoricalDates[],
  activeDotAngle = 0,
) => {
  const SWITCH_DELAY = 700
  const INPUT_DATA_ARRAY_LENGTH = inputDataArray.length

  const [currentIndex, setCurrentIndex] = useState(0)
  const [delayedCurrentIndex, setDlayedCurrentIndex] = useState(0)
  const [currentPeriod, setCurrentPeriod] = useState(inputDataArray[0].period)
  const [currentEvents, setCurrentEvents] = useState(inputDataArray[0].events)

  useEffect(() => {
    setCurrentPeriod(inputDataArray[currentIndex].period)

    const setTimeOutId = setTimeout(() => {
      setCurrentEvents(inputDataArray[currentIndex].events)
    }, SWITCH_DELAY)

    return () => clearTimeout(setTimeOutId)
  }, [currentIndex, inputDataArray])

  const revoltItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (!isNaN(+event.currentTarget.innerText)) {
      const currentIndex = +event.currentTarget.innerText - 1

      setCurrentIndex(currentIndex)

      setTimeout(() => {
        setDlayedCurrentIndex(currentIndex)
      }, SWITCH_DELAY)
    }
  }

  const nextItem = (): void => {
    setCurrentIndex(currentIndex + 1)

    setTimeout(() => {
      setDlayedCurrentIndex(currentIndex + 1)
    }, SWITCH_DELAY)
  }

  const previousItem = (): void => {
    setCurrentIndex(currentIndex - 1)

    setTimeout(() => {
      setDlayedCurrentIndex(currentIndex - 1)
    }, SWITCH_DELAY)
  }

  const generateRevoltSwitcherItems = () => {
    const delta = (Math.PI * 2) / INPUT_DATA_ARRAY_LENGTH
    let angle = 0 - activeDotAngle

    return inputDataArray.map((date, index) => {
      const left = 265 * Math.cos(angle) + 236
      const top = 265 * Math.sin(angle) + 236

      angle += delta

      const isItemTextActive = () =>
        index === delayedCurrentIndex && index === currentIndex

      const setItemDotStyles = () => {
        if (index === delayedCurrentIndex && index !== currentIndex) {
          return styles.revoltSwitcherItemDotNotActive
        }

        if (index === delayedCurrentIndex && index === currentIndex) {
          return styles.revoltSwitcherItemDotActive
        }

        return styles.revoltSwitcherItemDot
      }

      return (
        <div
          key={nanoid()}
          style={{
            top: `${top}px`,
            left: `${left}px`,
            transform: `rotate(${
              (360 / INPUT_DATA_ARRAY_LENGTH) * currentIndex
            }deg)`,
          }}
          className={styles.revoltSwitcherItem}
          onClick={revoltItem}
        >
          <span
            style={{
              display: isItemTextActive() ? 'inline' : 'none',
            }}
            className={styles.revoltSwitcherItemText}
          >
            {date.topic}
          </span>

          <div className={setItemDotStyles()}>{index + 1}</div>
        </div>
      )
    })
  }

  return {
    generateRevoltSwitcherItems,
    currentIndex,
    delayedCurrentIndex,
    nextItem,
    previousItem,
    INPUT_DATA_ARRAY_LENGTH,
    currentPeriod,
    currentEvents,
  }
}
