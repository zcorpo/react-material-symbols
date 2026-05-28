import type { SVGProps, JSX } from 'react'

export default function BookmarkFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M185.87-98.52V-859.7H774.7v761.18L480-224.27 185.87-98.52Z" />
    </svg>
  )
}
