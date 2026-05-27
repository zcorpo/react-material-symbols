import type { SVGProps, JSX } from 'react'

export default function Filter1Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M537.22-347.61H604v-405H454.22v66.22h83v338.78ZM195.48-195.48v-708.83h708.83v708.83H195.48ZM55.69-55.69v-708.83h79.79v629.04h629.04v79.79H55.69Z" />
    </svg>
  )
}
