import type { SVGProps } from 'react'

export default function AlignJustifySpaceBetweenFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M811-55v-218H677v-414h134v-219h95v851h-95ZM55-55v-851h94v219h135v414H149v218H55Z" />
    </svg>
  )
}
