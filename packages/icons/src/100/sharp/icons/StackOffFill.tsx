import type { SVGProps } from 'react'

export default function StackOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M828-236 476-588h352v352ZM566-682v-124H258l-22-22h352v146h-22Zm246 566-16-16H372v-424L154-774v380h124v22H132v-424l-16-16 16-16 696 696-16 16Z" />
    </svg>
  )
}
