import type { SVGProps, JSX } from 'react'

export default function MergeTypeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M682-135 429-388v-297L324-580l-67-67 219-219 219 219-67 67-105-105v259l225 224-66 67Zm-410 0-66-67 162-162 66 67-162 162Z" />
    </svg>
  )
}
