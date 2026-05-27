import type { SVGProps } from 'react'

export default function TextSnippetFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-120v-720h460l260 260v460H120Zm159-171h402v-60H279v60Zm0-159h402v-60H279v60Zm0-159h276v-60H279v60Z" />
    </svg>
  )
}
