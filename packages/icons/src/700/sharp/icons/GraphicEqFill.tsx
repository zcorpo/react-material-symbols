import type { SVGProps } from 'react'

export default function GraphicEqFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M266-221v-518h84v518h-84ZM439-55v-851h82v851h-82ZM95-389v-182h83v182H95Zm515 168v-518h83v518h-83Zm172-168v-182h84v182h-84Z" />
    </svg>
  )
}
