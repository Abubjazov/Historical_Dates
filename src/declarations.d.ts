declare module '*.module.scss' {
  const styles: { [key: string]: string }
  export default styles
}

declare module '*.svg' {
  import React from 'react'
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  >
  const src: string
  export default src
}
declare module '*.svg' {
  const src: string
  export default src
}
declare module '*.ico' {
  const src: string
  export default src
}
