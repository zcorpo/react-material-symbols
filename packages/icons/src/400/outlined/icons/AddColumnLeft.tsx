import type { SVGProps, JSX } from 'react'

export default function AddColumnLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-180v-600H551v600h269Zm-660 60v-150h60v90h271v-600H220v90h-60v-150h720v720H160Zm331-360Zm60 0h-60 60Zm0 0ZM160-370v-80H80v-60h80v-80h60v80h80v60h-80v80h-60Z" />
    </svg>
  )
}
