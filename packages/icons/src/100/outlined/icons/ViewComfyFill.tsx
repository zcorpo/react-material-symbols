import type { SVGProps, JSX } from 'react'

export default function ViewComfyFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-491v-257h696v257H132Zm231 279v-257h465v257H363Zm-231 0v-257h209v257H132Z" />
    </svg>
  )
}
