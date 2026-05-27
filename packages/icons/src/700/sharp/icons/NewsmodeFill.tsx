import type { SVGProps } from 'react'

export default function NewsmodeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-95v-771h851v771H55Zm199-196h453v-60H254v60Zm0-161h155v-218H254v218Zm254 0h199v-60H508v60Zm0-158h199v-60H508v60Z" />
    </svg>
  )
}
