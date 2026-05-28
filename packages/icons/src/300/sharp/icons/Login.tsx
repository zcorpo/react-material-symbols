import type { SVGProps, JSX } from 'react'

export default function Login({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480.23-140v-45.39h294.38v-589.22H480.23V-820H820v680H480.23Zm-35.77-187.69-33-32.23 97.39-97.39H140v-45.38h367.62l-97.39-97.39 32.62-32.61 153.3 153.5-151.69 151.5Z" />
    </svg>
  )
}
