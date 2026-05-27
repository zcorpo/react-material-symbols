import type { SVGProps, JSX } from 'react'

export default function BatteryHoriz050Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M171.69-315.38v-96.93H120v-135.38h51.69v-96.93H840v329.24H171.69Zm30-30.77h314.93v-267.7H201.69v267.7Z" />
    </svg>
  )
}
