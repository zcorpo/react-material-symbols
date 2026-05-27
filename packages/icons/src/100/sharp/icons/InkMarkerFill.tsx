import type { SVGProps } from 'react'

export default function InkMarkerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m265-174-33-33-42 42-24-23 42-43-32-32 521-521 89 89-521 521Zm176-323L208-263l56 57 235-234-58-57Z" />
    </svg>
  )
}
