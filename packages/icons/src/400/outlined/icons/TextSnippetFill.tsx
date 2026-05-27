import type { SVGProps, JSX } from 'react'

export default function TextSnippetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M180-120q-24.75 0-42.37-17.63Q120-155.25 120-180v-600q0-24.75 17.63-42.38Q155.25-840 180-840h400l260 260v400q0 24.75-17.62 42.37Q804.75-120 780-120H180Zm99-171h402v-60H279v60Zm0-159h402v-60H279v60Zm0-159h276v-60H279v60Z" />
    </svg>
  )
}
