import type { SVGProps } from 'react'

export default function BookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M135-55v-851h691v851H135Zm353-490 97-56 97 56v-266H488v266Z" />
    </svg>
  )
}
