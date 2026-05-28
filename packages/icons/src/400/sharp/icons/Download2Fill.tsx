import type { SVGProps, JSX } from 'react'

export default function Download2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-80v-60h640v60H160Zm319-160L199-600h160v-280h240v280h161L479-240Z" />
    </svg>
  )
}
