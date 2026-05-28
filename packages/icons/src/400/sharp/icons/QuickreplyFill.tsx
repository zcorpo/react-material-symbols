import type { SVGProps, JSX } from 'react'

export default function QuickreplyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M766-40v-200h-60v-240h145l-58 170h87L766-40ZM80-80v-800h800v340H646v300H240L80-80Z" />
    </svg>
  )
}
