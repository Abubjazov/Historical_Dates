import React from 'react'

import classes from './App.module.scss'

export const App: React.FC = () => {
  return (
    <div>
      <h1>Hello, React Type with Webpack!</h1>
      <h2 className={classes.ntr}>Hello, React Type with Webpack!</h2>
      <h1 className={classes.ntrGth}>Hello, React Type with Webpack!</h1>
    </div>
  )
}
