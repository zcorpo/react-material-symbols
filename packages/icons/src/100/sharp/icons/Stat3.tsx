import type { SVGProps } from 'react'

export default function Stat3({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m292-141-16-15 204-204 204 204-16 15-188-188-188 188Zm0-241-16-16 204-204 204 204-16 16-188-189-188 189Zm0-242-16-16 204-204 204 204-16 16-188-189-188 189Z" />
    </svg>
  )
}
