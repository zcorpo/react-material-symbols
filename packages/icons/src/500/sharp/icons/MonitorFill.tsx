import type { SVGProps } from 'react'

export default function MonitorFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M257.37-114.02v-73L307-236.89H74.02v-609.33h812.2v609.33H652l50.63 49.87v73H257.37Z" />
    </svg>
  )
}
