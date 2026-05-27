import type { SVGProps } from 'react'

export default function BackspaceFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m436-358 106-106 106 106 17-16-107-106 106-106-16-16-106 106-106-106-16 16 106 106-106 106 16 16Zm-97 146L132-480l207-268h489v536H339Z" />
    </svg>
  )
}
