import type { SVGProps, JSX } from 'react'

export default function Icon3gMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M146-306v-22h202v-141H147v-22h201v-141H146v-22h224v348H146Zm668-186v186H509v-348h305v22H531v304h261v-142H691v-22h123Z" />
    </svg>
  )
}
