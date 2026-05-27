import type { SVGProps } from 'react'

export default function FlashlightOnFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M240-764v-116h480v116H240Zm276 423.18q15-14.83 15-36Q531-398 516.18-413q-14.83-15-36-15Q459-428 444-413.18q-15 14.83-15 36Q429-356 443.82-341q14.83 15 36 15Q501-326 516-340.82ZM330-80v-443l-90-132v-49h480v49l-90 132v443H330Z" />
    </svg>
  )
}
