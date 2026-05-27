import type { SVGProps } from 'react'

export default function BatteryChargingFull2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M90-290v-380h539L452-450v100h136l-11 60H90Zm589 0 28-160H581l176-220h4l-28 160h126L683-290h-4Z" />
    </svg>
  )
}
