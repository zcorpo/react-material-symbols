import type { SVGProps, JSX } from 'react'

export default function EventSeatFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-220h640v220h-60v-160H220v160h-60Zm-40-290v-100h100v100H120Zm160 10v-440h400v440H280Zm460-10v-100h100v100H740Z" />
    </svg>
  )
}
