import type { SVGProps } from 'react'

export default function FileCopyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-240v-628h348l160 160v468H280Zm337-459h149L617-846v147ZM132-92v-548h22v526h405v22H132Z" />
    </svg>
  )
}
