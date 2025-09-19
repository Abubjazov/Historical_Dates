type TPerion = [number, number]
export interface IHistoricalDates {
  period: TPerion
  topic: string
  events: {
    year: number
    text: string
  }[]
}

export type TEvents = Pick<IHistoricalDates, 'events'>

export const inputDataArray: IHistoricalDates[] = [
  {
    period: [1992, 1997],
    topic: 'Космос',
    events: [
      {
        year: 1992,
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 1993,
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 1994,
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 1995,
        text: 'Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже',
      },
      {
        year: 1996,
        text: 'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые',
      },
      {
        year: 1997,
        text: 'Скорость распространения лавы после извержения, близка к скорости бега гончей',
      },
    ],
  },
  {
    period: [1998, 2001],
    topic: 'Кино',
    events: [
      {
        year: 1998,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 1999,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2000,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2001,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
    ],
  },
  {
    period: [2002, 2007],
    topic: 'Кино',
    events: [
      {
        year: 2002,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2003,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2004,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2005,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2006,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2007,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
    ],
  },
  {
    period: [2008, 2013],
    topic: 'Космос',
    events: [
      {
        year: 2008,
        text: '13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды',
      },
      {
        year: 2009,
        text: 'Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11',
      },
      {
        year: 2010,
        text: 'Компания Tesla официально представила первый в мире электрический грузовик Tesla Semi',
      },
      {
        year: 2011,
        text: 'Изначально, отвертка была изобретена для выковыривания гвоздей, шуруп был изобретен на 100 лет позже',
      },
      {
        year: 2012,
        text: 'Флот США содержит больше авианосцев, чем все флоты мира вместе взятые',
      },
      {
        year: 2013,
        text: 'Скорость распространения лавы после извержения, близка к скорости бега гончей',
      },
    ],
  },
  {
    period: [2014, 2019],
    topic: 'Кино',
    events: [
      {
        year: 2014,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2015,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2016,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2017,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2018,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
      {
        year: 2019,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla expedita nostrum deleniti.',
      },
    ],
  },
]
