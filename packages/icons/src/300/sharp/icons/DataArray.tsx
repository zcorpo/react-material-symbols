import type { SVGProps, JSX } from 'react'

export default function DataArray({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M608.46-180v-45.39h126.15v-509.22H608.46V-780H780v600H608.46ZM180-180v-600h171.54v45.39H225.39v509.22h126.15V-180H180Z" />
    </svg>
  )
}
