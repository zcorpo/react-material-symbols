import type { SVGProps, JSX } from 'react'

export default function Timer10({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M535-280h185v-400H535v400Zm-80 80v-560h345v560H455Zm-200 0v-480h-94v-80h174v560h-80Z" />
    </svg>
  )
}
