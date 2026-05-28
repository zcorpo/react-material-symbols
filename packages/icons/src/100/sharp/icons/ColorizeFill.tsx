import type { SVGProps, JSX } from 'react'

export default function ColorizeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M172-172v-111l355-355-81-81 14-15 103 101 163-164 70 72-165 164 103 103-15 15-83-82-353 353H172Zm22-22h83l346-347-82-82-347 346v83Z" />
    </svg>
  )
}
