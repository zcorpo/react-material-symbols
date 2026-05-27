import type { SVGProps } from 'react'

export default function CheckSmall({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m400-427 238-238q15-14 33-14t33 14.5q15 14.5 15 33T704-598L434-327q-14 14-34 14t-34-14L255-438q-14-15-14-33.5t15-33q15-14.5 33.5-14.5t33.5 14l77 78Z" />
    </svg>
  )
}
