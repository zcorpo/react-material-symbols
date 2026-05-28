import type { SVGProps, JSX } from 'react'

export default function Flutter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-372 171-480l352-352h217L280-372Zm243 244L333-318l190-189h217L550-318l190 190H523Z" />
    </svg>
  )
}
