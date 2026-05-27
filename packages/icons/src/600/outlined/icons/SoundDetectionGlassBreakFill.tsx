import type { SVGProps } from 'react'

export default function SoundDetectionGlassBreakFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-301.43V-854.7H854.7v83.18L537.43-417.7 379-575.57 105.87-301.43Zm0 195.56v-81.87L380-463.43l161.57 161.56L854.7-652.7v546.83H105.87Z" />
    </svg>
  )
}
