import type { SVGProps } from 'react'

export default function Crop219Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M186-332q-23 0-38.5-15.5T132-386v-188q0-23 15.5-38.5T186-628h588q23 0 38.5 15.5T828-574v188q0 23-15.5 38.5T774-332H186Z" />
    </svg>
  )
}
