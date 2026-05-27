import type { SVGProps, JSX } from 'react'

export default function AutoAwesomeMosaicFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M457-95H95v-771h362v771Zm48-410v-361h361v361H505Zm0 410v-362h361v362H505Z" />
    </svg>
  )
}
