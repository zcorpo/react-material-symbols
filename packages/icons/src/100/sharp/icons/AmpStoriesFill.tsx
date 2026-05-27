import type { SVGProps } from 'react'

export default function AmpStoriesFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M332-212v-536h296v536H332Zm-128-80v-376h22v376h-22Zm530 0v-376h22v376h-22Z" />
    </svg>
  )
}
