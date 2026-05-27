import type { SVGProps } from 'react'

export default function ArrowForwardIos({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m304-58-80-81 343-343-343-343 80-81 424 424L304-58Z" />
    </svg>
  )
}
