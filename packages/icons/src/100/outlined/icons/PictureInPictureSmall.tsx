import type { SVGProps, JSX } from 'react'

export default function PictureInPictureSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-22h642q12 0 22-10t10-22v-482h22v482q0 22.77-15.61 38.39Q796.78-212 774-212H132Zm260-128v-229h308v229H392Z" />
    </svg>
  )
}
