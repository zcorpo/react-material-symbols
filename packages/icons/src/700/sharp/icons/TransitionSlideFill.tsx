import type { SVGProps } from 'react'

export default function TransitionSlideFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M15-135v-691h294v691H15Zm374 0v-691h557v691H389Z" />
    </svg>
  )
}
