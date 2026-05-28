import type { SVGProps, JSX } from 'react'

export default function LooksTwoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M365-277h230v-60H425v-115h170v-231H365v60h170v111H365v235ZM120-120v-720h720v720H120Z" />
    </svg>
  )
}
