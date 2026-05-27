import type { SVGProps, JSX } from 'react'

export default function ChangeHistoryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m69-154.02 412-657.46 410 657.46H69Z" />
    </svg>
  )
}
