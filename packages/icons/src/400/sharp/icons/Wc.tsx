import type { SVGProps } from 'react'

export default function Wc({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-80v-300h-50v-300h248v300h-50v300H212Zm22.5-675.42q-21.5-21.42-21.5-51.5t21.42-51.58q21.42-21.5 51.5-21.5t51.58 21.42q21.5 21.42 21.5 51.5t-21.42 51.58q-21.42 21.5-51.5 21.5t-51.58-21.42ZM630-80v-240H526l100-360h116l100 360H738v240H630Zm2.5-675.42q-21.5-21.42-21.5-51.5t21.42-51.58q21.42-21.5 51.5-21.5t51.58 21.42q21.5 21.42 21.5 51.5t-21.42 51.58q-21.42 21.5-51.5 21.5t-51.58-21.42Z" />
    </svg>
  )
}
