import type { SVGProps, JSX } from 'react'

export default function TiltArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-140v-680h600.38v680H180Zm277.69-263.38L376-485.08l-32 31.62 136.38 136.38L616-452.69l-32-31.62-80.92 80.93v-221.23h-45.39v221.23Z" />
    </svg>
  )
}
