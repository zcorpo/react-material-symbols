import type { SVGProps, JSX } from 'react'

export default function ChangeHistoryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m152.31-200 327.92-524.62L807.69-200H152.31Z" />
    </svg>
  )
}
