import { FC } from 'react'
import React from 'react'

import styles from './Slider.module.scss'

export interface SliderProps {
  userString?: string
}

const Slider: FC<SliderProps> = ({ userString = 'Slider' }) => {
  return <div className={styles.sliderWrapper}>{userString}</div>
}

export default Slider
