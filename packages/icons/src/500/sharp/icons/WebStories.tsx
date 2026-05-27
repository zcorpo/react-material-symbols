import type { SVGProps, JSX } from 'react'

export default function WebStories({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M700-141.43v-677.14h65.5v677.14H700ZM71.87-75.93v-808.14H600v808.14H71.87ZM865.5-208.17V-751.3h42.87v543.13H865.5ZM140-143.35h391.87v-672.58H140v672.58Zm0-672.58v672.58-672.58Z" />
    </svg>
  )
}
