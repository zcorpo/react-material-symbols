import type { SVGProps } from 'react'

export default function TsvFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm133-163h25v-185h52v-25H212v25h53v185Zm132 0h128v-117H422v-68h103v-25H397v118h103v67H397v25Zm244 0h43l62-210h-27l-56 194-54-194h-27l59 210Z" />
    </svg>
  )
}
