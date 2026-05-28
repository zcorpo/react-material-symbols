import type { SVGProps, JSX } from 'react'

export default function ViewModuleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M590-493v-215h197v215H590Zm-204 0v-215h189v215H386Zm-212 0v-215h197v215H174Zm0 241v-216h197v216H174Zm212 0v-216h189v216H386Zm204 0v-216h197v216H590Z" />
    </svg>
  )
}
