import type { SVGProps, JSX } from 'react'

export default function ExposureNeg1({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M400-410H120v-60h280v60Zm250 210v-467l-99 71-35-53 153-111h51v560h-70Z" />
    </svg>
  )
}
