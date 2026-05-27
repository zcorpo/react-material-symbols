import type { SVGProps } from 'react'

export default function SplitSceneDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-570v-270h640v270H160Zm0 450v-330H80v-60h800v60h-80v330H160Z" />
    </svg>
  )
}
