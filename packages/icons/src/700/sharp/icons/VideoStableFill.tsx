import type { SVGProps, JSX } from 'react'

export default function VideoStableFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm628-94 96-361-502-141-94 361 500 141Z" />
    </svg>
  )
}
