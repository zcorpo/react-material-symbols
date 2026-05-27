import type { SVGProps } from 'react'

export default function WineBarFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M320-120v-60h130v-185q-99-14-154.5-79.5T240-600v-240h480v240q0 90-55.5 155.5T510-365v185h130v60H320Zm-20-510h360v-150H300v150Z" />
    </svg>
  )
}
