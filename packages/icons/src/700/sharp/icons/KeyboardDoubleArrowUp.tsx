import type { SVGProps } from 'react'

export default function KeyboardDoubleArrowUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m282-189-66-67 264-264 264 264-66 67-198-199-198 199Zm0-276-66-66 264-265 264 265-66 66-198-199-198 199Z" />
    </svg>
  )
}
