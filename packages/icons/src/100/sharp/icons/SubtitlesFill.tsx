import type { SVGProps, JSX } from 'react'

export default function SubtitlesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm138-147h324v-22H270v22Zm398 0h22v-22h-22v22ZM270-485h22v-22h-22v22Zm96 0h324v-22H366v22Z" />
    </svg>
  )
}
