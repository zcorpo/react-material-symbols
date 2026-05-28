import type { SVGProps, JSX } from 'react'

export default function NorthEast({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m202-160-42-42 498-498H364v-60h396v396h-60v-294L202-160Z" />
    </svg>
  )
}
