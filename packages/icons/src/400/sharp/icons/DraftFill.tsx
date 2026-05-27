import type { SVGProps } from 'react'

export default function DraftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-800h421l219 219v581H160Zm391-554h189L551-820v186Z" />
    </svg>
  )
}
