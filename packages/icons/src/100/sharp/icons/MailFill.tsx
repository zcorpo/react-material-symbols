import type { SVGProps, JSX } from 'react'

export default function MailFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M132-212v-536h696v536H132Zm348-281 326-219v-14L480-521 154-726v14l326 219Z" />
    </svg>
  )
}
