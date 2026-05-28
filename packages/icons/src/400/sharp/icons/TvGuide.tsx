import type { SVGProps, JSX } from 'react'

export default function TvGuide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Zm140-140h60v-250h123l97 250h60l120-310h-70l-80 209-80-209H180v60h140v250Z" />
    </svg>
  )
}
