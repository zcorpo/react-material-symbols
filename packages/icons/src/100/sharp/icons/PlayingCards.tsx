import type { SVGProps } from 'react'

export default function PlayingCards({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m593-414 29-107-92-63-29 107 92 63ZM203-169l-97-41 97-215v256Zm94 42v-276l101 276H297Zm188-36L286-707l349-126 201 542-351 128Zm14-30 306-112-181-499-307 112 182 499Zm62-306Z" />
    </svg>
  )
}
