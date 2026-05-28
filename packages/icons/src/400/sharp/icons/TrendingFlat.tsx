import type { SVGProps, JSX } from 'react'

export default function TrendingFlat({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m702-301-43-42 106-106H120v-60h646L660-615l42-42 178 178-178 178Z" />
    </svg>
  )
}
