import type { SVGProps, JSX } from 'react'

export default function UnknownMedFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M50-433v-134h390v134H50Zm470 0v-134h390v134H520Z" />
    </svg>
  )
}
