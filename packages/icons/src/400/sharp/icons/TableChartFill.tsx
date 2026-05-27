import type { SVGProps, JSX } from 'react'

export default function TableChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-639v-201h720v201H120Zm0 518v-458h190v458H120Zm530 0v-458h190v458H650Zm-280 0v-458h220v458H370Z" />
    </svg>
  )
}
