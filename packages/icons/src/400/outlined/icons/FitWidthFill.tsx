import type { SVGProps, JSX } from 'react'

export default function FitWidthFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h60v720h-60Zm660 0v-720h60v720h-60ZM285-450v-60h60v60h-60Zm165 0v-60h60v60h-60Zm165 0v-60h60v60h-60Z" />
    </svg>
  )
}
