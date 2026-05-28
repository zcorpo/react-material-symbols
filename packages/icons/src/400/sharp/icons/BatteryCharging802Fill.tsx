import type { SVGProps, JSX } from 'react'

export default function BatteryCharging802Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M90-290v-380h539l-48 60h-71v260h78l-11 60H90Zm589 0 28-160H581l176-220h4l-28 160h126L683-290h-4Z" />
    </svg>
  )
}
