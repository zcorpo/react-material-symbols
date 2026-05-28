import type { SVGProps, JSX } from 'react'

export default function Book4Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M300-288h22v-518h-22v518Zm-48 156q-33.33 0-56.67-23.33Q172-178.67 172-212v-536q0-33.33 23.33-56.67Q218.67-828 252-828h402v562H252q-24 0-41 15.82-17 15.83-17 40Q194-186 211-170t41 16h514v-594h22v616H252Z" />
    </svg>
  )
}
