import type { SVGProps } from 'react'

export default function OverviewKeyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M27-185.87V-774.7h588.83v588.83H27Zm680.91 0V-774.7h66.79v588.83h-66.79Zm158.31 0V-774.7H933v588.83h-66.78Z" />
    </svg>
  )
}
