import type { SVGProps, JSX } from 'react'

export default function UnknownMedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-457.31v-85.38h340v85.38H100Zm419.62 0v-85.38h339.99v85.38H519.62Z" />
    </svg>
  )
}
