import type { SVGProps } from 'react'

export default function InsertPageBreakFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-230h640v230H160Zm391-554h189L551-820v186ZM350-370v-60h260v60H350Zm320 0v-60h250v60H670Zm-630 0v-60h250v60H40Zm120-120v-390h421l219 219v171H160Z" />
    </svg>
  )
}
