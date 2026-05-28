import type { SVGProps, JSX } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M309-651v342-342Zm-94 436v-531h531v531H215Zm94-94h342v-342H309v342Z" />
    </svg>
  )
}
