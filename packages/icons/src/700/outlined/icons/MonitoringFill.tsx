import type { SVGProps } from 'react'

export default function MonitoringFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M103-103v-100l91-91v191h-91Zm166 0v-261l91-91v352h-91Zm166 0v-352l91 91v261h-91Zm166 0v-263l91-90v353h-91Zm166 0v-424l90-90v514h-90ZM103-320v-134l297-295 160 160 297-298v133L560-455 400-615 103-320Z" />
    </svg>
  )
}
