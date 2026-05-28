import type { SVGProps, JSX } from 'react'

export default function SoundDetectionGlassBreak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h720v720H120Zm60-660v418l199-200 159 159 242-271v-106H180Zm0 600h600v-404L541-316 380-477 180-276v96Z" />
    </svg>
  )
}
