import type { SVGProps, JSX } from 'react'

export default function ViewStreamFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-220v-237.31h680V-220H140Zm0-282.69V-740h680v237.31H140Z" />
    </svg>
  )
}
