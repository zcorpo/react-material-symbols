import type { SVGProps, JSX } from 'react'

export default function AutoReadPause({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M405-426h22v-268h-22v268Zm128 0h22v-268h-22v268ZM132-180v-648h696v536H244L132-180Zm102-134h572v-492H154v574l80-82Zm-80 0v-492 492Z" />
    </svg>
  )
}
