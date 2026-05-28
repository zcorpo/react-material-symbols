import type { SVGProps, JSX } from 'react'

export default function Timer3Select({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-200v-80h261v-160H162v-80h259v-160H160v-80h341v240l-40 40 40 40v240H160Zm440 0v-60h180v-70H600v-190h240v60H660v70h180v190H600Z" />
    </svg>
  )
}
