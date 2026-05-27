import type { SVGProps } from 'react'

export default function MmsFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M234-393h498L571-604 445-437l-92-113-119 157ZM55-55v-851h851v691H215L55-55Z" />
    </svg>
  )
}
