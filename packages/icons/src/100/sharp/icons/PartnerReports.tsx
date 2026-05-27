import type { SVGProps, JSX } from 'react'

export default function PartnerReports({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M469-448v-340h22v340h-22ZM172-172v-151h22v129h572v-129h22v151H172Zm287-128v-42h42v42h-42Z" />
    </svg>
  )
}
