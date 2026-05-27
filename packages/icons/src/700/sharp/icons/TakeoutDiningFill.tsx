import type { SVGProps, JSX } from 'react'

export default function TakeoutDiningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M152-540 34-666l67-67 88 91-5-49 172-175h249l171 175-5 49 88-91 67 67-118 126H152Zm73 405-28-365h566l-28 365H225Z" />
    </svg>
  )
}
