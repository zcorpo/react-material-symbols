import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidBolt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h754l-75 95H105v342h555l-15 94H10Zm95-94v-342 342Zm607.82 51L744-436H594l214-267h23.18L800-525h150L736-258h-23.18Z" />
    </svg>
  )
}
