import type { SVGProps, JSX } from 'react'

export default function Icon7kFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50v240Zm-210.57 0h58l65-192v-48h-175v50h117l-65 190ZM114.02-114.02v-732.2h732.2v732.2h-732.2Z" />
    </svg>
  )
}
