import type { SVGProps, JSX } from 'react'

export default function Filter2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M435.35-347.61h235.09v-66.78H501.57v-101.83h176.78v-236.39H436.48v66.22h175.09V-583H435.35v235.39ZM195.48-195.48v-708.83h708.83v708.83H195.48ZM55.69-55.69v-708.83h79.79v629.04h629.04v79.79H55.69Z" />
    </svg>
  )
}
