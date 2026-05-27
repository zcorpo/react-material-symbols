import type { SVGProps } from 'react'

export default function Title({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-725H264q-4.58 0-7.79-3.29-3.21-3.3-3.21-8 0-4.71 3.21-8.21 3.21-3.5 7.79-3.5h433q4.58 0 7.79 3.29 3.21 3.3 3.21 8 0 4.71-3.21 8.21-3.21 3.5-7.79 3.5H492v502q0 4.58-3.29 7.79-3.3 3.21-8 3.21-4.71 0-8.21-3.5-3.5-3.5-3.5-8.5v-501Z" />
    </svg>
  )
}
