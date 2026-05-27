import type { SVGProps } from 'react'

export default function SplitSceneFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M95-135v-691h278v691H95Zm338 80v-851h94v80h339v691H527v80h-94Z" />
    </svg>
  )
}
