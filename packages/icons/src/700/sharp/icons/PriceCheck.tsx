import type { SVGProps, JSX } from 'react'

export default function PriceCheck({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M247-350v-56.67H137V-490h220v-81H137v-249h110v-56h83v56.67h110V-736H220v81h220v249H330v56h-83ZM569-94 388-276l63-62 118 118 231-230 63 62L569-94Z" />
    </svg>
  )
}
