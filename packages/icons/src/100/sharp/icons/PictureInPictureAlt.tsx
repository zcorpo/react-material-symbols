import type { SVGProps, JSX } from 'react'

export default function PictureInPictureAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm22-22h652v-492H154v492Zm0 0v-492 492Zm304-44h308v-229H458v229Zm22-22v-185h264v185H480Z" />
    </svg>
  )
}
