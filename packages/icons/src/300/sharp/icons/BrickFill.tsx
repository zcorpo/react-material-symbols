import type { SVGProps } from 'react'

export default function BrickFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-180v-441.31h118.77V-780h204.61v158.69h113.24V-780h204.61v158.69H860V-180H100Z" />
    </svg>
  )
}
