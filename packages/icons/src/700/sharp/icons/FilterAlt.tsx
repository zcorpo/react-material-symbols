import type { SVGProps } from 'react'

export default function FilterAlt({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M375-135v-296L67-826h826L586-431v296H375Zm105-316 221-280H260l220 280Zm0 0Z" />
    </svg>
  )
}
