import type { SVGProps, JSX } from 'react'

export default function BottomNavigation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-220h600v-440H180v440Zm0 60v100h600v-100H180Zm0 0v100-100Z" />
    </svg>
  )
}
