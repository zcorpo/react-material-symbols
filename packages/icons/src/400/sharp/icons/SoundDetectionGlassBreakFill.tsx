import type { SVGProps, JSX } from 'react'

export default function SoundDetectionGlassBreakFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-302v-538h720v99L538-403 379-562 120-302Zm0 182v-96l260-261 161 161 299-335v531H120Z" />
    </svg>
  )
}
