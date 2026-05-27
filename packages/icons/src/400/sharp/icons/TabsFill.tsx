import type { SVGProps } from 'react'

export default function TabsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h600v-313H180v313Zm381-510h189v-60H561v60Z" />
    </svg>
  )
}
