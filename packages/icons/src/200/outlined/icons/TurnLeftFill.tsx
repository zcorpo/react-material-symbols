import type { SVGProps, JSX } from 'react'

export default function TurnLeftFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M630-200v-318.77q0-10.77-6.92-17.69-6.93-6.92-17.7-6.92h-386L314.77-448l-21.23 22L160-558.77l133.54-133.54 21.23 22-95.39 96.16h386q22.45 0 38.92 16.08 16.47 16.09 16.47 39.3V-200H630Z" />
    </svg>
  )
}
