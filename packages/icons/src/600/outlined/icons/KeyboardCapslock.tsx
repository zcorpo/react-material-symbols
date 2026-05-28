import type { SVGProps, JSX } from 'react'

export default function KeyboardCapslock({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M230.39-230.39v-79.22h499.22v79.22H230.39ZM480-749.57 728.57-501 672-444.43l-192-192-188 188L235.43-505 480-749.57Z" />
    </svg>
  )
}
