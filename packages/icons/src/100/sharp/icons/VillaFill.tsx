import type { SVGProps } from 'react'

export default function VillaFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M415-172v-255.57h273q0-20.96 14.77-35.69Q717.53-478 738.27-478q20.73 0 35.23 14.69Q788-448.63 788-428v256H627v-103h-50v103H415Zm-243 0v-433l427-164v319H393v278H172Z" />
    </svg>
  )
}
