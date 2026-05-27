import type { SVGProps, JSX } from 'react'

export default function TiltArrowDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M154.02-114.02v-732.2h652.2v732.2h-652.2ZM447.61-418.5l-68.5-68.98-45.35 45.35L480-295.89l146.24-146.24-45.35-45.11-68.5 68.74v-219.59h-64.78v219.59Z" />
    </svg>
  )
}
