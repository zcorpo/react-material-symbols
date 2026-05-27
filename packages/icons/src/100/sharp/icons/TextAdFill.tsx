import type { SVGProps, JSX } from 'react'

export default function TextAdFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm109-129h478v-22H241v22Zm0-128h478v-22H241v22Zm0-128h329v-22H241v22Z" />
    </svg>
  )
}
