import type { SVGProps } from 'react'

export default function LaptopChromebookFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M40-227.69v-30.77h80v-520h720v520h80v30.77H40Zm358.31-30.77h164.61v-32H398.31v32Z" />
    </svg>
  )
}
