import type { SVGProps, JSX } from 'react'

export default function MimoFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M296.92-160v-58.38l33.93-33.93H120V-800h720v547.69H628.92l34.16 33.93V-160H296.92Z" />
    </svg>
  )
}
