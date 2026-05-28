import type { SVGProps, JSX } from 'react'

export default function ModeCommentFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-292q-23 0-38.5-15.5T132-346v-428q0-23 15.5-38.5T186-828h588q23 0 38.5 15.5T828-774v529q0 19-16.5 25.5T782-226l-66-66H186Z" />
    </svg>
  )
}
