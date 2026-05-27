import type { SVGProps } from 'react'

export default function KeyboardArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m516.43-481-198-198L375-735.57 629.57-481 375-226.43 318.43-283l198-198Z" />
    </svg>
  )
}
