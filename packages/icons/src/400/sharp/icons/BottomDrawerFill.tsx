import type { SVGProps, JSX } from 'react'

export default function BottomDrawerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-660v370l59-59h482l59 59v-370H180Z" />
    </svg>
  )
}
