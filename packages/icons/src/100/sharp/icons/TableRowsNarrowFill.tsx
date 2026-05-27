import type { SVGProps, JSX } from 'react'

export default function TableRowsNarrowFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m172-326 647-20-31-123-647 20 31 123Zm0-165 647-20-31-124-647 21 31 123Zm0-166 647-20-31-123-647 20 31 123Zm616 485v-647 678-31Zm-616 12 647-20-31-124-647 21 31 123Z" />
    </svg>
  )
}
