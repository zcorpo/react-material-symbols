import type { SVGProps, JSX } from 'react'

export default function ArrowLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M564.07-270.2 354.26-480l209.81-209.8v419.6Z" />
    </svg>
  )
}
