import type { SVGProps } from 'react'

export default function AirlineSeatLegroomExtra({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-280H80v-560h60v500h380v60Zm227 160L606-410H230v-430h220v250h174l165 340 105-47 48 89-195 88Z" />
    </svg>
  )
}
