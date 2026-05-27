import type { SVGProps, JSX } from 'react'

export default function Icon5gMobiledataBadgeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-172v-616h776v616H92Zm642-320h-94v22h72v142H531v-304h203v-22H509v348h225v-186ZM226-306h188v-185H248v-141h166v-22H226v185h166v141H226v22Z" />
    </svg>
  )
}
