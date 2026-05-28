import type { SVGProps, JSX } from 'react'

export default function Window({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M840-120H120v-720h720v720ZM510-450v270h270v-270H510Zm0-60h270v-270H510v270Zm-60 0v-270H180v270h270Zm0 60H180v270h270v-270Z" />
    </svg>
  )
}
