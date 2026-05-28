import type { SVGProps, JSX } from 'react'

export default function StackOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M880-166 406-640h474v474ZM580-700v-120H226l-60-60h474v180h-60ZM837-37l-43-43H320v-474L140-734v354h120v60H80v-474l-43-43 43-43L880-80l-43 43Z" />
    </svg>
  )
}
