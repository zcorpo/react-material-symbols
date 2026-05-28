import type { SVGProps, JSX } from 'react'

export default function FlagFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M185.87-105.87V-814.7h369l19.19 86H814.7v398.83H532.13l-19-85H265.09v309h-79.22Z" />
    </svg>
  )
}
