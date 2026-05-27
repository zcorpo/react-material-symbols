import type { SVGProps } from 'react'

export default function DeviceBandFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M301-55v-516h-58v-138h58v-197h361v197h58v138h-58v516H301Z" />
    </svg>
  )
}
