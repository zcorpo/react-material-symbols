import type { SVGProps, JSX } from 'react'

export default function PictureInPictureAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm382-139h335v-257H437v257Zm168-129Z" />
    </svg>
  )
}
