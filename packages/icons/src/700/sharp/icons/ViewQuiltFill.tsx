import type { SVGProps } from 'react'

export default function ViewQuiltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M362-495v-291h504v291H362Zm266 320v-290h238v290H628Zm-266 0v-290h236v290H362Zm-267 0v-611h237v611H95Z" />
    </svg>
  )
}
