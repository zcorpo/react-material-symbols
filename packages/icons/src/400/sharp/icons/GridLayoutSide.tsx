import type { SVGProps, JSX } from 'react'

export default function GridLayoutSide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h350v-600H180v600Zm600 0v-600H590v600h190Z" />
    </svg>
  )
}
