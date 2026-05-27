import type { SVGProps, JSX } from 'react'

export default function Icon1xMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M307-306h22v-348H226v22h81v326Zm177 0h28l98-165 99 165h29L626-494l96-160h-27l-84 141-84-141h-29l97 162-111 186ZM92-172v-616h776v616H92Z" />
    </svg>
  )
}
