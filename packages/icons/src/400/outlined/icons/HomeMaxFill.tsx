import type { SVGProps, JSX } from 'react'

export default function HomeMaxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M280-160v-30H180q-59 0-99.5-40.5T40-330v-290q0-59 40.5-99.5T180-760h600q59 0 99.5 40.5T920-620v290q0 59-40.5 99.5T780-190H680v30H280Z" />
    </svg>
  )
}
