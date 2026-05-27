import type { SVGProps } from 'react'

export default function DragHandleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-390v-60h640v60H160Zm0-120v-60h640v60H160Z" />
    </svg>
  )
}
