import type { SVGProps, JSX } from 'react'

export default function Stop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M300-660v360-360Zm-60 420v-480h480v480H240Zm60-60h360v-360H300v360Z" />
    </svg>
  )
}
