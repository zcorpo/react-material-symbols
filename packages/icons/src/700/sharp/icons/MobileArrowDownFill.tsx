import type { SVGProps } from 'react'

export default function MobileArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480.39-314 637-472l-43-43-84 85v-198h-60v198l-83.47-85L324-472l156.39 158ZM175-15v-931h608v223h43v193h-43v515H175Z" />
    </svg>
  )
}
