import type { SVGProps, JSX } from 'react'

export default function MovieFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M65.87-145.87V-814.7h79.22l74 152h130l-74-152h89l74 152h130l-74-152h89l74 152h130l-74-152H894.7v668.83H65.87Z" />
    </svg>
  )
}
