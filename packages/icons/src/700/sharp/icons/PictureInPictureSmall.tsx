import type { SVGProps, JSX } from 'react'

export default function PictureInPictureSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-94h756v-597h95v691H55Zm321-194v-257h335v257H376Z" />
    </svg>
  )
}
