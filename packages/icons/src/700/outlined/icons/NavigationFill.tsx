import type { SVGProps, JSX } from 'react'

export default function NavigationFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m184-74-54-54 350-798 350 798-54 54-296-135L184-74Z" />
    </svg>
  )
}
