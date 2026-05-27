import type { SVGProps } from 'react'

export default function PictureInPictureLargeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-94h756v-597h95v597q0 39.05-27.77 66.52Q850.46-135 811-135H55Zm161-194v-417h495v417H216Z" />
    </svg>
  )
}
