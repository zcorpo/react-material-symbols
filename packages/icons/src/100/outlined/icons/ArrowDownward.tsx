import type { SVGProps, JSX } from 'react'

export default function ArrowDownward({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-748v494L228-496l-16 16 268 268 268-268-16-16-241 242v-494h-22Z" />
    </svg>
  )
}
