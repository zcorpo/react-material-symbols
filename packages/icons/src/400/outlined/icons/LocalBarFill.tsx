import type { SVGProps, JSX } from 'react'

export default function LocalBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-120v-60h210v-244L120-780v-60h720v60L510-424v244h210v60H240Zm41-575h398l83-81H198l83 81Z" />
    </svg>
  )
}
