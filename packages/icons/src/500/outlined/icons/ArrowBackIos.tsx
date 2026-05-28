import type { SVGProps, JSX } from 'react'

export default function ArrowBackIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M405.74-74.26 0-480l405.74-405.74L467.48-823l-343 343 343 343-61.74 62.74Z" />
    </svg>
  )
}
