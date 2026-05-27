import type { SVGProps } from 'react'

export default function Filter7Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M453-338h60l142-345v-60H425v60h170L453-338ZM200-200v-680h680v680H200ZM80-80v-680h60v620h620v60H80Z" />
    </svg>
  )
}
