import type { SVGProps, JSX } from 'react'

export default function ClosedCaptionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-640h720v640H120Zm120-201h202v-72h-50v22H290v-138h102v22h50v-72H240v238Zm279 0h202v-72h-50v22H569v-138h102v22h50v-72H519v238Z" />
    </svg>
  )
}
