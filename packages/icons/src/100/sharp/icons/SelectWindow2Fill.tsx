import type { SVGProps } from 'react'

export default function SelectWindow2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M806-403v-289H281v-136h547v425h-22ZM132-132v-466h580v466H132Z" />
    </svg>
  )
}
