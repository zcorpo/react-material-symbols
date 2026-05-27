import type { SVGProps, JSX } from 'react'

export default function WindowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M491-469h297v297H491v-297Zm0-22v-297h297v297H491Zm-22 0H172v-297h297v297Zm0 22v297H172v-297h297Z" />
    </svg>
  )
}
