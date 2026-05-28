import type { SVGProps, JSX } from 'react'

export default function SoundDetectionGlassBreakFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-312.77V-820h680v112.08L538.77-393.38 379.38-552.77 140-312.77ZM140-140v-106l240-241 160.23 160.23L820-639.85V-140H140Z" />
    </svg>
  )
}
