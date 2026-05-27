import type { SVGProps } from 'react'

export default function Upload2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-60h640v60H160Zm200-160v-280H199l281-360 280 360H600v280H360Z" />
    </svg>
  )
}
