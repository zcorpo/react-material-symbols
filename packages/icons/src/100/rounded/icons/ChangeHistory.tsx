import type { SVGProps } from 'react'

export default function ChangeHistory({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M223-212q-17 0-24-14t1-28l258-411q8-13 22-13t23 13l257 411q8 14 1 28t-24 14H223Zm-10-22h534L480-661 213-234Zm267-213Z" />
    </svg>
  )
}
