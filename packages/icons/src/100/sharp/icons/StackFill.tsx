import type { SVGProps, JSX } from 'react'

export default function StackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M278-394v22H132v-456h456v146h-22v-124H154v412h124Zm94 262v-456h456v456H372Z" />
    </svg>
  )
}
