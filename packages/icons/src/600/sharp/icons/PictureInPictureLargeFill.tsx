import type { SVGProps, JSX } from 'react'

export default function PictureInPictureLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M219.91-325.09v-417h495v417h-495ZM65.87-145.87v-79.22h749.04V-814.7h79.79v668.83H65.87Z" />
    </svg>
  )
}
