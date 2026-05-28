import type { SVGProps, JSX } from 'react'

export default function ViewWeek({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M149-229h181v-502H149v502Zm241 0h180v-502H390v502Zm240 0h181v-502H630v502Zm276 94H55v-691h851v691Z" />
    </svg>
  )
}
