import type { SVGProps, JSX } from 'react'

export default function RemoveFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-464.62v-30.76h480v30.76H240Z" />
    </svg>
  )
}
