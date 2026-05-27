import type { SVGProps, JSX } from 'react'

export default function PictureInPictureMobile({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M760-120H200v-720h560v720Zm-30.77-30.77v-658.46H230.77v658.46h498.46Zm0-658.46H230.77h498.46Zm-43.46 354v-314.23H449.54v314.23h236.23ZM655-486H480.31v-252.69H655V-486Z" />
    </svg>
  )
}
