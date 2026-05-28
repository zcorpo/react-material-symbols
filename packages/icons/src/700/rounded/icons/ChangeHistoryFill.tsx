import type { SVGProps, JSX } from 'react'

export default function ChangeHistoryFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-135q-29 0-42-24t2-48l362-576q14-22 39-22t39 22l360 576q14 24 1.5 48T840-135H120Z" />
    </svg>
  )
}
