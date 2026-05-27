import type { SVGProps, JSX } from 'react'

export default function SubdirectoryArrowRightFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }): JSX.Element {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="m564.46-140-32.61-32.62 160.84-161.23H220V-780h45.39v400.77h428.3L532.46-540.08l32.62-32.61L780-357.77 564.46-140Z" />
    </svg>
  )
}
