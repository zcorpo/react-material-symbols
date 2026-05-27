import type { SVGProps, JSX } from 'react'

export default function PalletFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-80h800v80h-80v-40H520v40h-80v-40H160v40H80Zm120-240v-560h560v560H200Zm160-340h240v-40H360v40Z" />
    </svg>
  )
}
