import type { SVGProps, JSX } from 'react'

export default function CreditScore({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154-598h652v-128H154v128Zm-22 386v-536h696v220H154v294h246v22H132Zm450 56L448-290l16-16 118 118 232-232 16 16-248 248Zm-428-78v-176 119-435 492Z" />
    </svg>
  )
}
