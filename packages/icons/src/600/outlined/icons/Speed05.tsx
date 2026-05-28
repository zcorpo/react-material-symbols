import type { SVGProps, JSX } from 'react'

export default function Speed05({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M277.65-277v-66.22h66.78V-277h-66.78Zm126.78 0v-66.22h171.7v-105.39h-171.7V-683h238.48v66.22H470.65v101.39h105.48q28.52 0 47.65 19.13t19.13 47.65v105.39q0 28.52-19.13 47.37Q604.65-277 576.13-277h-171.7Z" />
    </svg>
  )
}
