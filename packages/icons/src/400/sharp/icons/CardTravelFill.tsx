import type { SVGProps } from 'react'

export default function CardTravelFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M80-120v-600h213v-160h373v160h214v600H80Zm273-600h253v-100H353v100ZM140-277h680v-108H140v108Z" />
    </svg>
  )
}
