import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M150-315q-12 0-21-9t-9-21v-75q0-12 9-21t21-9h660q12 0 21 9t9 21v75q0 12-9 21t-21 9H150Zm0-195q-12 0-21-9t-9-21v-75q0-12 9-21t21-9h660q12 0 21 9t9 21v75q0 12-9 21t-21 9H150Zm0-195q-12 0-21-9t-9-21v-75q0-12 9-21t21-9h660q12 0 21 9t9 21v75q0 12-9 21t-21 9H150Zm0 585q-12 0-21-9t-9-21v-75q0-12 9-21t21-9h660q12 0 21 9t9 21v75q0 12-9 21t-21 9H150Z" />
    </svg>
  )
}
