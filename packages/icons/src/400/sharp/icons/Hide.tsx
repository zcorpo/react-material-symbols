import type { SVGProps } from 'react'

export default function Hide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m162-120-42-42 214-214H216v-60h220v220h-60v-118L162-120Zm363-405v-220h60v118l213-213 42 42-213 213h118v60H525Z" />
    </svg>
  )
}
