import type { SVGProps, JSX } from 'react'

export default function MoveSelectionDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-80v-480h480v480H240Zm0-580v-60h60v60h-60Zm420 0v-60h60v60h-60ZM240-820v-60h60v60h-60Zm210 0v-60h60v60h-60Zm210 0v-60h60v60h-60Z" />
    </svg>
  )
}
