import type { SVGProps } from 'react'

export default function CallMadeFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z" />
    </svg>
  )
}
