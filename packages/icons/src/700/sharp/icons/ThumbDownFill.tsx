import type { SVGProps, JSX } from 'react'

export default function ThumbDownFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M21-343v-162l163-379h545v541L463-66l-86-62 51-215H21Zm768 0v-541h126v541H789Z" />
    </svg>
  )
}
