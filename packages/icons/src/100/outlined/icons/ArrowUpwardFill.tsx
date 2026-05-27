import type { SVGProps, JSX } from 'react'

export default function ArrowUpwardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-212v-494L228-465l-16-15 268-268 268 268-16 15-241-241v494h-22Z" />
    </svg>
  )
}
