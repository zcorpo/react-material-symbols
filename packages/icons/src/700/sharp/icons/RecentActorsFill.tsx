import type { SVGProps } from 'react'

export default function RecentActorsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M17-175v-611h611v611H17Zm94-146q49-32 101-48t110-16q58 0 110 16t101 48v-370H111v370Zm132.5-140.5Q211-494 211-540t32.5-78.5Q276-651 322-651t78.5 32.5Q433-586 433-540t-32.5 78.5Q368-429 322-429t-78.5-32.5ZM714-175v-611h72v611h-72Zm157 0v-611h72v611h-72Z" />
    </svg>
  )
}
