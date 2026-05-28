import type { SVGProps, JSX } from 'react'

export default function HomeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-95v-517.67L480-872l346 259v518H566v-311H394v311H135Z" />
    </svg>
  )
}
