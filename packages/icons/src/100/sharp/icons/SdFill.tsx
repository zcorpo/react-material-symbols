import type { SVGProps } from 'react'

export default function SdFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm140-163h168v-118H297v-67h118v19h25v-44H272v118h143v67H297v-19h-25v44Zm248 0h148l20-21v-169l-20-20H520v210Zm25-25v-160h118v160H545Z" />
    </svg>
  )
}
