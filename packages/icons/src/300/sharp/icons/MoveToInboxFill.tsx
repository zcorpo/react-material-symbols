import type { SVGProps } from 'react'

export default function MoveToInboxFill({ size = 24, ...props }: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="currentColor" viewBox="0 -960 960 960" {...props}>
      <path d="M480-430.08 338.92-571.15l32.62-32.23 85.77 85.77v-193.62h45.38v193.62l85.77-85.77 32.62 32.23L480-430.08ZM140-140v-680h680v680H140Zm412.65-171.11q32.43-23.12 52.35-59.12h169.61v-404.38H185.39v404.38H355q19.92 36 52.35 59.12Q439.77-288 480-288q40.23 0 72.65-23.11Z" />
    </svg>
  )
}
