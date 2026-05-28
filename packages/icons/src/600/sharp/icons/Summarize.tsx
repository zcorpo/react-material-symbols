import type { SVGProps, JSX } from 'react'

export default function Summarize({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M275.61-617.61h66.78v-66.78h-66.78v66.78Zm0 171h66.78v-66.78h-66.78v66.78Zm0 171h66.78v-66.78h-66.78v66.78ZM105.87-105.87V-854.7H642L854.7-642v536.13H105.87Zm79.22-79.22h589.82v-412.04H597.13v-177.78H185.09v589.82Zm0-589.82v178.21-178.21 589.82-589.82Z" />
    </svg>
  )
}
