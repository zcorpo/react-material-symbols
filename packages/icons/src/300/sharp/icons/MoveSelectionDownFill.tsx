import type { SVGProps } from 'react'

export default function MoveSelectionDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M259.23-100v-441.54h441.54V-100H259.23Zm0-550.77v-50h50v50h-50Zm391.54 0v-50h50v50h-50ZM259.23-810v-50h50v50h-50ZM455-810v-50h50v50h-50Zm195.77 0v-50h50v50h-50Z" />
    </svg>
  )
}
