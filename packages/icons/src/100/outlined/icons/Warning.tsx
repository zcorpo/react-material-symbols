import type { SVGProps, JSX } from 'react'

export default function Warning({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m130-172 350-604 350 604H130Zm38-22h624L480-732 168-194Zm325-70.19q5-5.2 5-12 0-6.81-5.19-11.81-5.2-5-12-5-6.81 0-11.81 5.19-5 5.2-5 12 0 6.81 5.19 11.81 5.2 5 12 5 6.81 0 11.81-5.19ZM470-336h22v-208h-22v208Zm10-127Z" />
    </svg>
  )
}
