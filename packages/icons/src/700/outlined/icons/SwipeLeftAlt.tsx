import type { SVGProps, JSX } from 'react'

export default function SwipeLeftAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M608-263q-84 0-139-50.5T396-433H235l83 83-66 67L55-480l197-197 66 67-83 83h161q18-69 73-119.5T608-697q91 0 154.5 63.5T826-480q0 90-63.5 153.5T608-263Zm87.5-130q35.5-36 35.5-87t-35.5-87q-35.5-36-87-36t-87 36Q486-531 486-480t35.5 87q35.5 36 87 36t87-36ZM608-480Z" />
    </svg>
  )
}
