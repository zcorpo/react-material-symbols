import type { SVGProps } from 'react'

export default function StarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m311-228 45-192-149-129 196-17 77-181 77 181 196 17-149 129 45 192-169-102-169 102Z" />
    </svg>
  )
}
