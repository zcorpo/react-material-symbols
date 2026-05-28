import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMedium({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-94h756v-597h95v597q0 39.05-27.77 66.52Q850.46-135 811-135H55Zm241-194v-337h415v337H296Z" />
    </svg>
  )
}
