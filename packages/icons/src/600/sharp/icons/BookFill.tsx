import type { SVGProps, JSX } from 'react'

export default function BookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M145.87-65.87V-894.7H814.7v828.83H145.87Zm341.26-483.04 97-56 97 56v-266h-194v266Z" />
    </svg>
  )
}
