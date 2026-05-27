import type { SVGProps } from 'react'

export default function ComputerFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M27-99.09v-66.78h906v66.78H27Zm38.87-126.78V-854.7H894.7v628.83H65.87Z" />
    </svg>
  )
}
