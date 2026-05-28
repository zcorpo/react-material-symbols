import type { SVGProps, JSX } from 'react'

export default function ThumbnailBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h260v640H80Zm320 0v-640h480v640H400Z" />
    </svg>
  )
}
