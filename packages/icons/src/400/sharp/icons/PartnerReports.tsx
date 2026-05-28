import type { SVGProps, JSX } from 'react'

export default function PartnerReports({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M451-440v-400h60v400h-60ZM120-120v-203h60v143h600v-143h60v203H120Zm331-160v-60h60v60h-60Z" />
    </svg>
  )
}
