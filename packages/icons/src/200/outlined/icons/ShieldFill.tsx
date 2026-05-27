import type { SVGProps, JSX } from 'react'

export default function ShieldFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-121.77q-120.77-36.54-200.38-147.88Q200-381 200-519.15v-213.39l280-104.61 280 104.61v213.39q0 138.15-79.62 249.5Q600.77-158.31 480-121.77Z" />
    </svg>
  )
}
