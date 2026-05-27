import type { SVGProps } from 'react'

export default function FilesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-210h390v-390h370v600H100Zm0-225.62V-700h294.38L100-405.62Zm94-29.76L444.62-686v250.62H194Z" />
    </svg>
  )
}
