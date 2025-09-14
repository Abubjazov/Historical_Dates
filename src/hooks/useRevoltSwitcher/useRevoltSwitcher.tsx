import { useEffect, useState } from 'react'
import React from 'react'

import { nanoid } from 'nanoid'

import styles from '../../components/RevoltSwitcher/RevoltSwitcher.module.scss'
import { IHistoricalDates } from '../../mockData/mockData'

export const useRevoltSwitcher = (inputDataArray: IHistoricalDates[]) => {
  const inputDataArrayLength = inputDataArray.length
  const delta = (Math.PI * 2) / inputDataArrayLength

  const [currentIndex, setCurrentIndex] = useState(0)
  const [delayedCurrentIndex, setdDlayedCurrentIndex] = useState(0)
  const [currentPeriod, setCurrentPeriod] = useState(inputDataArray[0].period)
  const [currentEvents, setCurrentEvents] = useState(inputDataArray[0].events)

  useEffect(() => {
    setCurrentPeriod(inputDataArray[currentIndex].period)
    setCurrentEvents(inputDataArray[currentIndex].events)
  }, [currentIndex, inputDataArray])

  const revoltItem = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ): void => {
    if (!isNaN(+event.currentTarget.innerText)) {
      const currentIndex = +event.currentTarget.innerText - 1

      setCurrentIndex(currentIndex)

      setTimeout(() => {
        setdDlayedCurrentIndex(currentIndex)
      }, 700)
    }
  }

  const nextItem = (): void => {
    setCurrentIndex(currentIndex + 1)

    setTimeout(() => {
      setdDlayedCurrentIndex(currentIndex + 1)
    }, 700)
  }

  const previosItem = (): void => {
    setCurrentIndex(currentIndex - 1)

    setTimeout(() => {
      setdDlayedCurrentIndex(currentIndex - 1)
    }, 700)
  }

  const generateRevoltSwitcherItems = () => {
    let angle = 0 - delta

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
              (360 / inputDataArrayLength) * currentIndex
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
    nextItem,
    previosItem,
    inputDataArrayLength,
    currentPeriod,
    currentEvents,
  }
}
