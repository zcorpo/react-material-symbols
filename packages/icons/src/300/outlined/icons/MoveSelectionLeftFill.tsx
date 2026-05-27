import type { SVGProps, JSX } from 'react'

export default function MoveSelectionLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M100-259.23v-441.54h441.54v441.54H100Zm550.77-391.54v-50h50v50h-50Zm0 391.54v-50h50v50h-50ZM810-650.77v-50h50v50h-50ZM810-455v-50h50v50h-50Zm0 195.77v-50h50v50h-50Z" />
    </svg>
  )
}
