import type { SVGProps, JSX } from 'react'

export default function Computer({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M17-83v-72h926v72H17Zm38-132v-651h851v651H55Zm94-94h662v-462H149v462Zm0 0v-462 462Z" />
    </svg>
  )
}
