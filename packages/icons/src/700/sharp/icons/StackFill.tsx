import type { SVGProps, JSX } from 'react'

export default function StackFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M259-406v87H54v-587h587v204h-87v-117H141v413h118Zm60 351v-587h587v587H319Z" />
    </svg>
  )
}
