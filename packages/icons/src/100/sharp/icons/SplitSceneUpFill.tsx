import type { SVGProps, JSX } from 'react'

export default function SplitSceneUpFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-172v-203h536v203H212Zm-80-297v-22h80v-297h536v297h80v22H132Z" />
    </svg>
  )
}
