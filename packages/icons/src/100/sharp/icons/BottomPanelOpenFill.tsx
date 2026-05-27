import type { SVGProps } from 'react'

export default function BottomPanelOpenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M370-503h220L480-614 370-503ZM194-344h572v-422H194v422Zm-22 172v-616h616v616H172Z" />
    </svg>
  )
}
