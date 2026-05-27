import type { SVGProps } from 'react'

export default function Navigation({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m247-198-9-7 242-547 242 547-9 7-233-102-233 102Zm29-38 204-88 204 88-204-462-204 462Zm204-88Z" />
    </svg>
  )
}
