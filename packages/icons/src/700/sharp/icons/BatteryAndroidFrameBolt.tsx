import type { SVGProps } from 'react'

export default function BatteryAndroidFrameBolt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M10-215v-531h754l-75 95H105v342h555l-15 94H10Zm702.82-43L744-436H594l214-267h23.18L800-525h150L736-258h-23.18ZM135-339v-282h530L440-339H135Z" />
    </svg>
  )
}
