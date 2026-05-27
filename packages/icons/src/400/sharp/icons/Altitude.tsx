import type { SVGProps, JSX } from 'react'

export default function Altitude({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M730-490v-181l-74 73-42-42 146-146 146 146-42 43-74-74v181h-60ZM40-80l240-320 195 260h325L560-459 435-293l-38-50 163-217L920-80H40Zm395-60Z" />
    </svg>
  )
}
