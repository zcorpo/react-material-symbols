import type { SVGProps } from 'react'

export default function BidLandscapeDisabledFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M857 8 754-95H95v-659l-99-99 50-50L908-41 857 8Zm9-176L644-390l127-127v-102L594-441 168-866h698v698ZM189-290l178-178 177 177 7-7-228-227-134 134v101Z" />
    </svg>
  )
}
