import type { SVGProps, JSX } from 'react'

export default function PictureInPictureCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h760v600H100Zm217.39-176.39H642v-246.22H317.39v246.22Z" />
    </svg>
  )
}
