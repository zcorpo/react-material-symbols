import type { SVGProps, JSX } from 'react'

export default function DescriptionFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-250h322v-60H319v60Zm0-170h322v-60H319v60ZM160-80v-800h421l219 219v581H160Zm391-554h189L551-820v186Z" />
    </svg>
  )
}
