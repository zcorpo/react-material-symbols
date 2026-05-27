import type { SVGProps } from 'react'

export default function StraightenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-260v-440h182.69v204.61h45.39V-700h129.23v204.61h45.38V-700h129.23v204.61h45.39V-700H860v440H100Z" />
    </svg>
  )
}
