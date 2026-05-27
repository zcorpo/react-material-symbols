import type { SVGProps } from 'react'

export default function ViewArrayFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M105.87-185.87V-774.7h100v588.83h-100Zm160 0V-774.7h424.3v588.83h-424.3Zm484.3 0V-774.7H854.7v588.83H750.17Z" />
    </svg>
  )
}
