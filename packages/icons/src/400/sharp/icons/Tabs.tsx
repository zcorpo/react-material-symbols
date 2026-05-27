import type { SVGProps, JSX } from 'react'

export default function Tabs({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-60h600v-313H180v313Zm0-373h600v-227H180v227Zm381-137h189v-60H561v60ZM180-553v-227 227Z" />
    </svg>
  )
}
