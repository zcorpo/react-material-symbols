import type { SVGProps, JSX } from 'react'

export default function EventListFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M560-120v-320h320v320H560ZM80-250v-60h360v60H80Zm480-270v-320h320v320H560ZM80-650v-60h360v60H80Z" />
    </svg>
  )
}
