import type { SVGProps, JSX } from 'react'

export default function LocalCafeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-120v-60h640v60H160Zm0-140v-580h720v280H724v300H160Zm564-360h96v-160h-96v160Z" />
    </svg>
  )
}
