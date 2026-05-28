import type { SVGProps, JSX } from 'react'

export default function SportsMmaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M270-72v-158h432v158H270Zm-58-227-45-215v-352h534v169h92v183l-45.46 215H212Zm125-260h194v-134H337v134Z" />
    </svg>
  )
}
