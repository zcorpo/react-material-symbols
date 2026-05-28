import type { SVGProps, JSX } from 'react'

export default function InsertChartFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M286.83-277h60v-275h-60v275ZM450-277h60v-406h-60v406Zm163.74 0h60v-148h-60v148ZM105.87-105.87V-854.7H854.7v748.83H105.87Z" />
    </svg>
  )
}
