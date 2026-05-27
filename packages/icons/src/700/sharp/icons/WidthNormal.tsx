import type { SVGProps, JSX } from 'react'

export default function WidthNormal({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm94-94h158v-502H149v502Zm252 0h158v-502H401v502Zm252 0h158v-502H653v502ZM401-731v502-502Z" />
    </svg>
  )
}
