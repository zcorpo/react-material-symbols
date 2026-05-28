import type { SVGProps, JSX } from 'react'

export default function VerifiedUserFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m437-379 191-191-15-15-175 174-91-91-16 16 106 107Zm43 245q-115-37-191.5-143.5T212-518v-206l268-100 268 100v206q0 134-76.5 240.5T480-134Z" />
    </svg>
  )
}
