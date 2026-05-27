import type { SVGProps } from 'react'

export default function DevicesFold2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M253-172v-616h471l128 319H718v297H253Zm22-22h421v-275H368l-93-233v508Z" />
    </svg>
  )
}
