import type { SVGProps, JSX } from 'react'

export default function VideoCallFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M372-321h60v-132h132v-60H432v-132h-60v132H240v60h132v132ZM55-135v-691h691v301l160-160v410L746-435v300H55Z" />
    </svg>
  )
}
