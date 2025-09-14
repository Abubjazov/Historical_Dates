import { FC } from 'react'
import React from 'react'

import { ReactComponent as ArrowLeftIcon } from './icons/RevoltSwitcher/arrowLeft.svg'
import { ReactComponent as ArrowRightIcon } from './icons/RevoltSwitcher/arrowRight.svg'

export interface SvgIconProps {
  icon?: 'arrowLeft' | 'arrowRight'
}

const SvgIcon: FC<SvgIconProps> = ({ icon }) => {
  switch (icon) {
    case 'arrowRight': {
      return <ArrowRightIcon />
    }

    case 'arrowLeft': {
      return <ArrowLeftIcon />
    }

    default: {
      return null
    }
  }
}

export default SvgIcon
