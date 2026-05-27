import type { SVGProps, JSX } from 'react'

export default function PositionBottomLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M230-287h360v-90H230v90ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
