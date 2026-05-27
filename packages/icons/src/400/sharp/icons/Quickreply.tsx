import type { SVGProps } from 'react'

export default function Quickreply({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-80v-800h800v340h-60v-280H140v600l74-80h432v60H240L80-80Zm60-220v-520 520ZM766-40v-200h-60v-240h145l-58 170h87L766-40Z" />
    </svg>
  )
}
