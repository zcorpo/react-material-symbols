import type { SVGProps, JSX } from 'react'

export default function SendFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M120-160v-245l302-75-302-77v-243l760 320-760 320Z" />
    </svg>
  )
}
