import type { SVGProps, JSX } from 'react'

export default function FlightTakeoffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-93h771v93H95Zm76-210L8-576l110-30 120 100 137-39-218-290 132-35 316 264 183-50q35-8 66 10.5t40 54.5q9 34-6.5 65T839-486L171-305Z" />
    </svg>
  )
}
