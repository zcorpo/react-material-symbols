import type { SVGProps, JSX } from 'react'

export default function Icon7kFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50v240Zm-208.61 0h58l65-192v-48h-175v50h117l-65 190ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
