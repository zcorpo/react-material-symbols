import type { SVGProps, JSX } from 'react'

export default function ArrowForwardIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m304-82-56-57 343-343-343-343 56-57 400 400L304-82Z" />
    </svg>
  )
}
