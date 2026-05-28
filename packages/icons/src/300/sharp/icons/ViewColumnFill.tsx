import type { SVGProps, JSX } from 'react'

export default function ViewColumnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-220v-520h208.08v520H140Zm236.15 0v-520h207.7v520h-207.7Zm235.77 0v-520H820v520H611.92Z" />
    </svg>
  )
}
