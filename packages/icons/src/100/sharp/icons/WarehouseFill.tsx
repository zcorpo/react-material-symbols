import type { SVGProps } from 'react'

export default function WarehouseFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-172v-473l348-139 348 139v473H640v-320H320v320H132Zm260 0v-50h50v50h-50Zm63-120v-50h50v50h-50Zm63 120v-50h50v50h-50Z" />
    </svg>
  )
}
