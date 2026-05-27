import type { SVGProps } from 'react'

export default function LocalCafe({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-60h640v60H160Zm0-140v-580h720v280H724v300H160Zm60-60h444v-460H220v460Zm504-300h96v-160h-96v160ZM220-320h444-444Z" />
    </svg>
  )
}
