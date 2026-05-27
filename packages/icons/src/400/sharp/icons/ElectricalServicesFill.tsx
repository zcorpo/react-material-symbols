import type { SVGProps } from 'react'

export default function ElectricalServicesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M715-360v-60h125v60H715Zm0 160v-60h125v60H715Zm-225 40v-80h-95v-140h95v-80h195v300H490ZM120-280v-310h295v-150H160v-60h315v270H180v190h185v60H120Z" />
    </svg>
  )
}
