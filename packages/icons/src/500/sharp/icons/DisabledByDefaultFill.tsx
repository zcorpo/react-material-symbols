import type { SVGProps } from 'react'

export default function DisabledByDefaultFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.02-114.02v-732.2h732.2v732.2h-732.2ZM336-292.09l144-144 144 144L667.91-336l-144-144 144-144L624-667.91l-144 144-144-144L292.09-624l144 144-144 144L336-292.09Z" />
    </svg>
  )
}
