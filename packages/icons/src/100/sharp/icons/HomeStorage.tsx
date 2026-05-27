import type { SVGProps, JSX } from 'react'

export default function HomeStorage({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m244-204-63-376h598l-63 376H244Zm18-22h436l53-332H209l53 332Zm127-198h182v-22H389v22ZM229-646v-22h502v22H229Zm80-88v-22h342v22H309Zm-47 508h436-436Z" />
    </svg>
  )
}
