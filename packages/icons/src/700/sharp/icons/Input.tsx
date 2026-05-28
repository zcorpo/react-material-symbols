import type { SVGProps, JSX } from 'react'

export default function Input({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-105v-267h94v173h662v-562H149v175H55v-270h851v751H55Zm406-168-67-66 92-93H55v-94h431l-92-93 67-66 206 206-206 206Z" />
    </svg>
  )
}
