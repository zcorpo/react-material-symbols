import type { SVGProps } from 'react'

export default function Timer3Select({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M206-246v-16h246v-210H207v-16h245v-210H206v-16h262v226l-8 8 8 8v226H206Zm400 0v-22h166v-101H606v-145h188v22H628v101h166v145H606Z" />
    </svg>
  )
}
