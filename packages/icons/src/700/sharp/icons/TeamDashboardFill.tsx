import type { SVGProps } from 'react'

export default function TeamDashboardFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M410-95v-365H95v365h315Zm60 0h396v-365H470v365ZM95-520h771v-346H95v346Z" />
    </svg>
  )
}
