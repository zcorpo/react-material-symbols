import type { SVGProps, JSX } from 'react'

export default function BrowseActivity({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-590v-276h851v276h-95v-181H149v181H55Zm0 375v-315h94v221h662v-221h95v315H55Zm0-315v-60h285l62.31 129L541-707h40l57 117h268v60H601l-43-84-140 244h-37l-80-160H55ZM17-83v-72h926v72H17Zm463-457Z" />
    </svg>
  )
}
