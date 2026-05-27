import type { SVGProps } from 'react'

export default function Battery5Bar({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M249-55v-787h134v-64h194v64h134v787H249Zm95-533h272v-159H344v159Z" />
    </svg>
  )
}
