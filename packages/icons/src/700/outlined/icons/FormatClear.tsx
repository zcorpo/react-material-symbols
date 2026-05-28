import type { SVGProps, JSX } from 'react'

export default function FormatClear({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M535-529 434-629l24-56h-79l-93-92h531v134H584l-49 114ZM814-48 476-387l-91 212H239l134-315L48-814l50-50L864-98l-50 50Z" />
    </svg>
  )
}
