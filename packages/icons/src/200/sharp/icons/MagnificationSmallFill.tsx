import type { SVGProps, JSX } from 'react'

export default function MagnificationSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M217.08-543.38h121v-119.54h-121v119.54ZM120-200v-560h720v560H120Z" />
    </svg>
  )
}
