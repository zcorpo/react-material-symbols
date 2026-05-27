import type { SVGProps } from 'react'

export default function CompareArrows({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m294-135-66-66 104-103H55v-95h277L228-503l66-66 218 217-218 217Zm372-257L449-609l217-217 66 66-103 104h277v95H629l103 103-66 66Z" />
    </svg>
  )
}
