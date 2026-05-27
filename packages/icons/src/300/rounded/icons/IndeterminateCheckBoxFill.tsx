import type { SVGProps } from 'react'

export default function IndeterminateCheckBoxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M290.77-458.92h379.08q9.91 0 16.3-6.39 6.39-6.4 6.39-16.31 0-9.92-6.39-16.3-6.39-6.39-16.3-6.39H290.77q-9.91 0-16.3 6.39-6.39 6.4-6.39 16.31 0 9.92 6.39 16.3 6.39 6.39 16.3 6.39ZM197.69-140q-23.53 0-40.61-17.08T140-197.69v-564.62q0-23.53 17.08-40.61T197.69-820h564.62q23.53 0 40.61 17.08T820-762.31v564.62q0 23.53-17.08 40.61T762.31-140H197.69Z" />
    </svg>
  )
}
