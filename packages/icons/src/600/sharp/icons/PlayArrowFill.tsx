import type { SVGProps, JSX } from 'react'

export default function PlayArrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M305.87-177v-612l480.7 306-480.7 306Z" />
    </svg>
  )
}
