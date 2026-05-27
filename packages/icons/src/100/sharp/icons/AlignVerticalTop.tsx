import type { SVGProps } from 'react'

export default function AlignVerticalTop({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M319-158v-507h64v507h-64Zm258-240v-267h64v267h-64ZM132-781v-22h696v22H132Z" />
    </svg>
  )
}
