import type { SVGProps, JSX } from 'react'

export default function OutdoorGardenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149.46-140h202.92v-574.62l-101.46-100-101.46 100V-140Zm229.08 0h202.92v-574.62L480-814.62l-101.46 100V-140Zm229.08 0h202.92v-574.62l-101.46-100-101.46 100V-140Z" />
    </svg>
  )
}
