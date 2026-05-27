import type { SVGProps } from 'react'

export default function JamboardKioskFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M250-120v-60h200v-140H80v-520h800v520H510v140h200v60H250Z" />
    </svg>
  )
}
