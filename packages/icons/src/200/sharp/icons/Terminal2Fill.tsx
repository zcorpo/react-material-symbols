import type { SVGProps } from 'react'

export default function Terminal2Fill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M509.23-200v-30.77H780V-200H509.23ZM221.46-372.62l-22-21.23 172.23-172.46-172.23-172.46 22-21.23 193.69 193.69-193.69 193.69Z" />
    </svg>
  )
}
