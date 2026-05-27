import type { SVGProps, JSX } from 'react'

export default function ImagesearchRollerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M617-40H406v-318h75v-133H80v-313h143v-76h577v220H223v-84h-83v193h401v193h76v318Z" />
    </svg>
  )
}
