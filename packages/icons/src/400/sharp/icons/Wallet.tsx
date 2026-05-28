import type { SVGProps, JSX } from 'react'

export default function Wallet({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-160v-640h800v640H80Zm60-470h680v-110H140v110Zm495 255 185-155v-40H140v75l495 120Z" />
    </svg>
  )
}
