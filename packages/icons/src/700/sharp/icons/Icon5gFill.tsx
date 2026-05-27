import type { SVGProps, JSX } from 'react'

export default function Icon5gFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M109-280v-83h214v-81H109v-236h297v83H191v81h215v236H109Zm742-234v234H484v-400h367v83H567v234h203v-79h-92v-72h173Z" />
    </svg>
  )
}
