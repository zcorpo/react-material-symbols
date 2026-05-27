import type { SVGProps } from 'react'

export default function SplitSceneLeft({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M587-135v-94h184v-502H587v-95h279v691H587ZM433-55v-80H95v-691h338v-80h94v851h-94Zm338-676v502-502Z" />
    </svg>
  )
}
