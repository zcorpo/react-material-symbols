import type { SVGProps } from 'react'

export default function CheckIndeterminateSmallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M215-433v-94h531v94H215Z" />
    </svg>
  )
}
