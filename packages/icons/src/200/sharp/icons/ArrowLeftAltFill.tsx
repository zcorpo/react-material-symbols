import type { SVGProps, JSX } from 'react'

export default function ArrowLeftAltFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M396.15-267.69 183.85-480l212.53-212.54 22.24 21.23-175.93 175.93h533.69v30.76H242.69l175.69 175.7-22.23 21.23Z" />
    </svg>
  )
}
