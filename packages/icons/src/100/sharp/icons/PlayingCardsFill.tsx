import type { SVGProps, JSX } from 'react'

export default function PlayingCardsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m593-414 29-107-92-63-29 107 92 63ZM203-169l-97-41 97-215v256Zm94 42v-276l101 276H297Zm188-36L286-707l349-126 201 542-351 128Z" />
    </svg>
  )
}
