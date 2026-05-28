import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidShareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-240v-480h732L590-570H470v330H40Zm490-90v-180h261l-73-74 42-42 146 146-146 146-43-43 74-73H590v120h-60Z" />
    </svg>
  )
}
