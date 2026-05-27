import type { SVGProps, JSX } from 'react'

export default function AdGroupOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M820-104 645-280H254v-391L104-820l16-16 716 716-16 16Zm-662-80v-516h22v494h494v22H158Zm616-103L329-732h451v-74H277v22l-16-16v-28h541v541h-28Z" />
    </svg>
  )
}
