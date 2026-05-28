import type { SVGProps, JSX } from 'react'

export default function BottomPanelClose({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m480-503 110-111H370l110 111ZM194-194h572v-128H194v128Zm0-150h572v-422H194v422Zm0 22v128-128Zm-22 150v-616h616v616H172Z" />
    </svg>
  )
}
