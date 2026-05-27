import type { SVGProps } from 'react'

export default function PictureInPictureSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-22h674v-514h22v536H132Zm260-128v-229h308v229H392Z" />
    </svg>
  )
}
