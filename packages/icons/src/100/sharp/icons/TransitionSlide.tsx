import type { SVGProps, JSX } from 'react'

export default function TransitionSlide({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M92-212v-536h190v536H92Zm22-21h146v-494H114v494Zm268 21v-536h486v536H382Zm22-21h442v-494H404v494Zm-144 0v-494 494Zm144 0v-494 494Z" />
    </svg>
  )
}
