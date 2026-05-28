import type { SVGProps, JSX } from 'react'

export default function LowPriorityFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-494q0 88 62.5 146.5T352-289l-66-68 42-42 136 139-139 140-42-42 64-67q-110 0-188.5-76.5T80-494q0-109 74.5-187.5T336-760h152v60H336q-82 0-139 60.5T140-494Zm432 265v-60h308v60H572Zm0-235v-61h308v61H572Zm-24-236v-60h332v60H548Z" />
    </svg>
  )
}
