import type { SVGProps, JSX } from 'react'

export default function PictureInPictureCenterFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm194-153h308v-229H326v229Z" />
    </svg>
  )
}
