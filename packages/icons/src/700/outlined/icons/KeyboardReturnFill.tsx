import type { SVGProps } from 'react'

export default function KeyboardReturnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M358-216 95-479l263-263 67 67-149 150h495v-172h95v265H277l148 149-67 67Z" />
    </svg>
  )
}
