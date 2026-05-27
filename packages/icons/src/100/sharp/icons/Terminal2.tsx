import type { SVGProps } from 'react'

export default function Terminal2({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M512-212v-22h262v22H512ZM227-380l-16-15 169-169-169-169 16-15 184 184-184 184Z" />
    </svg>
  )
}
