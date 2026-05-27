import type { SVGProps, JSX } from 'react'

export default function VideoFileFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-132v-696h380l156 156v540H212Zm369-530h145L581-806v144ZM345-260h202v-87l72 39v-104l-72 39v-87H345v200Z" />
    </svg>
  )
}
