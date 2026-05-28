import type { SVGProps, JSX } from 'react'

export default function WbShade({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M792-160 540-412v-87l339 339h-87Zm-252 0v-177l177 177H540Zm-400 0v-410H80l230-230 230 230h-60v410H140Zm130-255h80v-155h-80v155Z" />
    </svg>
  )
}
