import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidShareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-280v-400h634.31l-116.62 98.46H458.46V-280H80Zm464.62-64.62v-150.76h281.76L738-584l22-21.23L885.23-480 760-354.77 737.77-377l88.61-87.62h-251v120h-30.76Z" />
    </svg>
  )
}
