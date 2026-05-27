import type { SVGProps, JSX } from 'react'

export default function BottomPanelCloseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-503 110-111H370l110 111ZM194-344h572v-422H194v422Zm-22 172v-616h616v616H172Z" />
    </svg>
  )
}
