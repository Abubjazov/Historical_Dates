import { FC } from 'react'
import React from 'react'

import styles from './Label.module.scss'

export interface LabelProps {
  text?: string
}

const Label: FC<LabelProps> = ({ text = 'Исторические даты' }) => {
  return (
    <div className={styles.labelWrapper}>
      <div className={styles.labelLeftBorder}></div>

      <div className={styles.labelText}>{text}</div>
    </div>
  )
}

export default Label
