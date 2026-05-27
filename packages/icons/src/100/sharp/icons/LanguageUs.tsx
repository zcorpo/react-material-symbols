import type { SVGProps, JSX } from 'react'

export default function LanguageUs({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M212-306v-348h22v326h184v-326h22v348H212Zm308 0v-62h22v40h184v-141H520v-185h228v62h-22v-40H542v141h206v185H520Z" />
    </svg>
  )
}
