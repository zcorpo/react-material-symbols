import type { SVGProps } from 'react'

export default function DeleteFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M395.46-273.69h30.77v-378.23h-30.77v378.23Zm138.31 0h30.77v-378.23h-30.77v378.23ZM240.23-160v-573.85H200v-30.77h154.15v-26.15h251.7v26.15H760v30.77h-40.23V-160H240.23Z" />
    </svg>
  )
}
