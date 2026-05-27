import type { SVGProps } from 'react'

export default function EditSquareFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M412-412v-85l376-376 83 82-379 379h-80Zm370-320 56-58-49-53-59 59 52 52ZM172-172v-616h397L318-537v219h213l257-257v403H172Z" />
    </svg>
  )
}
