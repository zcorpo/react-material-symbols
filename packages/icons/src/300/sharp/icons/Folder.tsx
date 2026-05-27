import type { SVGProps } from 'react'

export default function Folder({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-600h307.15l65.39 65.39H860V-180H100Zm45.39-45.39h669.22v-443.84H454.08l-65.39-65.38h-243.3v509.22Zm0 0v-509.22 509.22Z" />
    </svg>
  )
}
