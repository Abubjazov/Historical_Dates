import { useEffect, useState } from 'react'

export const useAnimatedDateDisplay = (inputValue: number, speed: number) => {
  const [currentValue, setCurrentValue] = useState(inputValue)

  useEffect(() => {
    let setTimeOutID: string | number | NodeJS.Timeout | undefined

    if (currentValue !== inputValue && currentValue < inputValue) {
      setTimeOutID = setTimeout(setCurrentValue, speed, currentValue + 1)
    }

    if (currentValue !== inputValue && currentValue > inputValue) {
      setTimeOutID = setTimeout(setCurrentValue, speed, currentValue - 1)
    }

    return () => clearTimeout(setTimeOutID)
  }, [inputValue, currentValue, speed])

  return {
    currentValue,
  }
}
