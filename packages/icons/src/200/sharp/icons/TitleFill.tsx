import type { SVGProps } from 'react'

export default function TitleFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M460-200v-519.23H240.77V-760H720v40.77H500.77V-200H460Z" />
    </svg>
  )
}
