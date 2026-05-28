import type { SVGProps, JSX } from 'react'

export default function StackedEmailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M171-246v-623h772v623H171ZM17-92v-641h94v547h720v94H17Zm540-381 292-229v-72L557-545 266-774v72l291 229Z" />
    </svg>
  )
}
