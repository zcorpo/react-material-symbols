import type { SVGProps } from 'react'

export default function UnfoldMore({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-158 334-304l16-16 130 130 130-130 16 16-146 146ZM350-640l-16-16 146-146 146 146-16 16-130-130-130 130Z" />
    </svg>
  )
}
