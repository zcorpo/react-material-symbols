import type { SVGProps, JSX } from 'react'

export default function Maximize({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-774.91v-79.79H814.7v79.79H145.87Z" />
    </svg>
  )
}
