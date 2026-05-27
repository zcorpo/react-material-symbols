import type { SVGProps } from 'react'

export default function HomeStorageFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m244-204-63-376h598l-63 376H244Zm145-220h182v-22H389v22ZM229-646v-22h502v22H229Zm80-88v-22h342v22H309Z" />
    </svg>
  )
}
