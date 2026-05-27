import type { SVGProps } from 'react'

export default function BatteryFullFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M272.59-74.02v-748.2h123.34v-64h168.14v64h123.34v748.2H272.59Z" />
    </svg>
  )
}
