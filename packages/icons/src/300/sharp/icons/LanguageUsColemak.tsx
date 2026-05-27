import type { SVGProps } from 'react'

export default function LanguageUsColemak({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M554.23-335.38h180.38v-289.24H554.23v289.24ZM180-290v-380h241.54v45.38H225.39v289.24h196.15V-290H180Zm328.85 0v-380H780v380H508.85Z" />
    </svg>
  )
}
