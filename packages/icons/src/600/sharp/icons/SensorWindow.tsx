import type { SVGProps, JSX } from 'react'

export default function SensorWindow({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M150.39-70.39v-819.22h659.22v819.22H150.39Zm79.22-449.22h170.78v-40h159.22v40h170.78v-290.78H229.61v290.78Zm0 79.22v290.78h500.78v-290.78H229.61Zm0 290.78h500.78-500.78Z" />
    </svg>
  )
}
