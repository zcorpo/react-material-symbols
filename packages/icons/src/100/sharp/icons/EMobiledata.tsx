import type { SVGProps } from 'react'

export default function EMobiledata({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M346-280v-400h268v22H368v167h246v22H368v167h246v22H346Z" />
    </svg>
  )
}
