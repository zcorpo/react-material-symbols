import type { SVGProps, JSX } from 'react'

export default function ChecklistRtlFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M656-190 489-356l67-66 100 99 179-180 66 68-245 245Zm0-320L489-676l67-66 100 99 179-180 66 68-245 245ZM59-273v-94h377v94H59Zm0-320v-94h377v94H59Z" />
    </svg>
  )
}
