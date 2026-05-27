import type { SVGProps } from 'react'

export default function LanguageSpanish({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M520-306v-62h22v40h184v-141H520v-185h228v62h-22v-40H542v141h206v185H520ZM212-654h228v22H234v141h166v22H234v141h206v22H212v-348Z" />
    </svg>
  )
}
