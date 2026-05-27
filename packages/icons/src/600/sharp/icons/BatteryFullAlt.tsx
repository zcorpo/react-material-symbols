import type { SVGProps } from 'react'

export default function BatteryFullAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M129.87-262.48v-127.91h-64v-179.22h64v-127.91H894.7v435.04H129.87Z" />
    </svg>
  )
}
