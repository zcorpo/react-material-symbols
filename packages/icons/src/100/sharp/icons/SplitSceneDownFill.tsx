import type { SVGProps } from 'react'

export default function SplitSceneDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-585v-203h536v203H212Zm0 413v-297h-80v-22h696v22h-80v297H212Z" />
    </svg>
  )
}
