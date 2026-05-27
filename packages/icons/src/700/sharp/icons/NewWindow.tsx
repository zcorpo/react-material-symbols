import type { SVGProps, JSX } from 'react'

export default function NewWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-95v-771h391v95H189v582h582v-297h95v391H95Zm571-451v-120H546v-80h120v-120h80v120h120v80H746v120h-80Z" />
    </svg>
  )
}
