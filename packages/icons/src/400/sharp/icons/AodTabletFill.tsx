import type { SVGProps, JSX } from 'react'

export default function AodTabletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-160v-640h880v640H40Zm150-60h580v-520H190v520Zm130-290v-40h320v40H320Zm40 120v-40h240v40H360Z" />
    </svg>
  )
}
