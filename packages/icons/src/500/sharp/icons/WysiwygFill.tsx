import type { SVGProps, JSX } from 'react'

export default function WysiwygFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M114.5-114.5v-731h731v731h-731ZM180-180h600v-520H180v520Zm100-310v-60h390v60H280Zm0 160v-60h230v60H280Z" />
    </svg>
  )
}
