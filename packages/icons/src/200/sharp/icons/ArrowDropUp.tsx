import type { SVGProps, JSX } from 'react'

export default function ArrowDropUp({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M327.69-420 480-572.54 632.31-420H327.69Z" />
    </svg>
  )
}
