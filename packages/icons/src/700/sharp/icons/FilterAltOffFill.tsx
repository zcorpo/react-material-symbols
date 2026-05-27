import type { SVGProps, JSX } from 'react'

export default function FilterAltOffFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M603-454 232-826h661L603-454ZM842-29 586-285v150H375v-361L29-842l51-50L892-80l-50 51Z" />
    </svg>
  )
}
