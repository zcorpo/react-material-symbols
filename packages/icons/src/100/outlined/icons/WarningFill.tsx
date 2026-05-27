import type { SVGProps } from 'react'

export default function WarningFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m130-172 350-604 350 604H130Zm363-92.19q5-5.2 5-12 0-6.81-5.19-11.81-5.2-5-12-5-6.81 0-11.81 5.19-5 5.2-5 12 0 6.81 5.19 11.81 5.2 5 12 5 6.81 0 11.81-5.19ZM470-336h22v-208h-22v208Z" />
    </svg>
  )
}
