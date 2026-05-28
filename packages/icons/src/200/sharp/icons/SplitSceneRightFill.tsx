import type { SVGProps, JSX } from 'react'

export default function SplitSceneRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M160-200v-560h218.46v560H160Zm304.62 80v-720h30.76v80H800v560H495.38v80h-30.76Z" />
    </svg>
  )
}
