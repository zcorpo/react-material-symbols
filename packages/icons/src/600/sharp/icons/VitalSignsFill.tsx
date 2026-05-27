import type { SVGProps, JSX } from 'react'

export default function VitalSignsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M38.39-440.39v-79.22h228.83L363-296.7l232-579 152.22 356.09h174.39v79.22H692.78L597-661.3l-233 579-151.22-358.09H38.39Z" />
    </svg>
  )
}
