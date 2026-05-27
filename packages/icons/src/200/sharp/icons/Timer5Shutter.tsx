import type { SVGProps } from 'react'

export default function Timer5Shutter({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M360-235.38v-30.77h249.46v-198.47H360v-260h280.23v30.77H390.77v198.47h249.46v260H360Z" />
    </svg>
  )
}
