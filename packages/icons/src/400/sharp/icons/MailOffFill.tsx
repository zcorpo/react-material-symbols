import type { SVGProps, JSX } from 'react'

export default function MailOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m786-88-72-72H80v-640h80l60 60h-86l-79-79 43-43 731 731-43 43Zm94-78L543-503l277-182-4-55-309 201-261-261h634v634Z" />
    </svg>
  )
}
