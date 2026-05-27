import type { SVGProps, JSX } from 'react'

export default function MailOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m799-72-62-63H55v-688h93l92 92H139L24-846l51-51 774 774-50 51Zm107-96L578-495l233-158-4-78-279 186-280-281h658v658Z" />
    </svg>
  )
}
