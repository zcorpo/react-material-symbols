import type { SVGProps, JSX } from 'react'

export default function Mail({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm348-281L154-712v478h652v-478L480-493Zm0-28 309-205H172l308 205ZM154-712v-14 492-478Z" />
    </svg>
  )
}
