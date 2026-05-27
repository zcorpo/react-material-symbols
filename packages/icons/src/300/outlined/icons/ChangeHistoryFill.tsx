import type { SVGProps, JSX } from 'react'

export default function ChangeHistoryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m116.16-180 364.46-582.3L843.84-180H116.16Z" />
    </svg>
  )
}
