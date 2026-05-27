import type { SVGProps, JSX } from 'react'

export default function BatteryAndroidFull({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M23.04-225.87V-734.7h814.7v508.83H23.04Zm844.7-153.78v-200.7h69.22v200.7h-69.22Z" />
    </svg>
  )
}
