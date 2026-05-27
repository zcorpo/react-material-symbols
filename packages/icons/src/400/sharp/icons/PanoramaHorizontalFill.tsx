import type { SVGProps } from 'react'

export default function PanoramaHorizontalFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-140v-680q47 23 155 51.5T480-740q137 0 245-28.5T880-820v680q-47-23-155-51.5T480-220q-137 0-245 28.5T80-140Z" />
    </svg>
  )
}
