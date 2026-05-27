import type { SVGProps } from 'react'

export default function TripFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M737-95v-639h169v639H737ZM391-734h178v-100H391v100ZM283-95v-639h14v-194h366v194h14v639H283ZM55-95v-639h168v639H55Z" />
    </svg>
  )
}
