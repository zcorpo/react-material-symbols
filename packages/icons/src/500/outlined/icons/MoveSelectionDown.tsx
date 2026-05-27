import type { SVGProps, JSX } from 'react'

export default function MoveSelectionDown({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M235.22-74.02v-490.05h490.04v490.05H235.22Zm68.13-68.13h353.54V-495.7H303.35v353.55Zm-68.13-514.74v-68.13h68.13v68.13h-68.13Zm421.67 0v-68.13h68.37v68.13h-68.37ZM235.22-817.85v-68.37h68.13v68.37h-68.13Zm210.95 0v-68.37h68.13v68.37h-68.13Zm210.72 0v-68.37h68.37v68.37h-68.37ZM480.24-319.04Z" />
    </svg>
  )
}
