import type { SVGProps, JSX } from 'react'

export default function TooltipFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-80 376-237H140q-25 0-42.5-17.5T80-297v-523q0-25 17.5-42.5T140-880h680q25 0 42.5 17.5T880-820v523q0 25-17.5 42.5T820-237H584L480-80Z" />
    </svg>
  )
}
