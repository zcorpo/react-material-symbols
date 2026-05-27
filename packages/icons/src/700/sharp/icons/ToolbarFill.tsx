import type { SVGProps, JSX } from 'react'

export default function ToolbarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-638v-228h771v228H95Zm0 543v-448h771v448H95Z" />
    </svg>
  )
}
