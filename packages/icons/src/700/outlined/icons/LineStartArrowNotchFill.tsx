import type { SVGProps } from 'react'

export default function LineStartArrowNotchFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M535-173 52-480l483-307-136 260h488v94H399l136 260Z" />
    </svg>
  )
}
