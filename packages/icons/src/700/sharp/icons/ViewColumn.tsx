import type { SVGProps } from 'react'

export default function ViewColumn({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M86-175v-611h789v611H86Zm94-94h137v-422H180v422Zm231 0h138v-422H411v422Zm232 0h137v-422H643v422Z" />
    </svg>
  )
}
