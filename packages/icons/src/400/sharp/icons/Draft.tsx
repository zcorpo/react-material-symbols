import type { SVGProps } from 'react'

export default function Draft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-800h421l219 219v581H160Zm391-554v-186H220v680h520v-494H551ZM220-820v186-186 680-680Z" />
    </svg>
  )
}
