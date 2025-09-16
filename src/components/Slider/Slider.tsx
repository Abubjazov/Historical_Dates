import { FC } from 'react'
import React from 'react'

import { nanoid } from 'nanoid'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Slider.css'
import useMediaQuery from '../../hooks/useMediaQuery/useMediaQuery'

export interface SliderProps {
  events: {
    year: number
    text: string
  }[]

  currentIndex: number
  delayedCurrentIndex: number
}

const Slider: FC<SliderProps> = ({
  events,
  currentIndex,
  delayedCurrentIndex,
}) => {
  const isMobile = useMediaQuery('(max-width: 920px)')

  const setSliderPerView = () => {
    if (isMobile) {
      return 2
    }
    return 3
  }

  const setSpaceBetween = () => {
    if (isMobile) {
      return 10
    }
    return 80
  }

  return (
    <div
      className={`slider-wrapper ${
        currentIndex !== delayedCurrentIndex ? 'slider-wrapper-not-active' : ''
      }`}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={setSpaceBetween()}
        slidesPerView={setSliderPerView()}
        navigation={!isMobile}
        pagination={{ enabled: isMobile, clickable: true }}
        grabCursor
        slideToClickedSlide
        speed={800}
      >
        {events.map(event => (
          <SwiperSlide key={nanoid()}>
            <div className="slide-title">{event.year}</div>

            <div className="slide-content">{event.text}</div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Slider
