import type { SVGProps } from 'react'

export default function GMobiledataFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-280v-400h356v60H340v280h240v-110H439v-60h201v230H280Z" />
    </svg>
  )
}
