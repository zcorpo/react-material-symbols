import type { SVGProps, JSX } from 'react'

export default function Icon3k({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-360h50v-90l84 90h66L608-480l112-120h-66l-84 90v-90h-50v240Zm-277 0h170v-240H243v50h120v54h-73v33h73v53H243v50ZM120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm0 0v-600 600Z" />
    </svg>
  )
}
