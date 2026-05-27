import type { SVGProps, JSX } from 'react'

export default function VariableAdd({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M600-280H120v-400h720v160h-60v-100H180v280h420v60Zm-420-60v-280 280Zm600 180v-120H660v-60h120v-120h60v120h120v60H840v120h-60Z" />
    </svg>
  )
}
