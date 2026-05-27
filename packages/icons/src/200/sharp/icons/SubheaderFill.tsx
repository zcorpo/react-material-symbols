import type { SVGProps } from 'react'

export default function SubheaderFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M260-603h320v-66.15H260V-603ZM160-160v-640h640v640H160Z" />
    </svg>
  )
}
