import type { SVGProps, JSX } from 'react'

export default function TabletAndroidFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-40v-880h720v880H120Zm288-85h164v-40H408v40ZM180-250h600v-520H180v520Z" />
    </svg>
  )
}
