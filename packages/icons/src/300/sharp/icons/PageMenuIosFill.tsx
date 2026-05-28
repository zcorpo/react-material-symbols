import type { SVGProps, JSX } from 'react'

export default function PageMenuIosFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-140v-45.39h442.23V-140H140Zm0-147.69v-45.39h680v45.39H140Zm0-147.69V-820h680v384.62H140Z" />
    </svg>
  )
}
