import type { SVGProps, JSX } from 'react'

export default function DiscoverTuneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M540-615.38v-30.77h124.62V-820h30.76v173.85H820v30.77H540ZM664.62-140v-364.62h30.76V-140h-30.76Zm-400 0v-169.23H140V-340h280v30.77H295.38V-140h-30.76Zm0-310.77V-820h30.76v369.23h-30.76Z" />
    </svg>
  )
}
