import type { SVGProps } from 'react'

export default function SplitSceneRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M140-180v-600h244.23v600H140Zm317.31 80v-760h45.38v80H820v600H502.69v80h-45.38Z" />
    </svg>
  )
}
