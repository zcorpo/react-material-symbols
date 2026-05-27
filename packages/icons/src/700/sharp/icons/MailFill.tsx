import type { SVGProps, JSX } from 'react'

export default function MailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M55-135v-691h851v691H55Zm425-295 331-223v-78L480-513 149-731v78l331 223Z" />
    </svg>
  )
}
