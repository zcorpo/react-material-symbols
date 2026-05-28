import type { SVGProps, JSX } from 'react'

export default function TrendingDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M647.02-234.74v-68.13h124.85L539.96-535.26l-167 167L74.02-666.2l48.74-48.73 249.2 249.19 167-167 279.89 280.13V-473.7h67.37v238.96h-239.2Z" />
    </svg>
  )
}
