import type { SVGProps, JSX } from 'react'

export default function ChevronRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m524.26-481-198-198L375-727.74 621.74-481 375-234.26 326.26-283l198-198Z" />
    </svg>
  )
}
