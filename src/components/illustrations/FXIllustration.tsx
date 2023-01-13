import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={200} height={173} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.3}
      d="M186.573 45.4c-4.995-2.73-10.775-4.001-15.353-7.385-4.578-3.383-7.536-10.22-4.144-14.8L112.229 0c-6.777.071-13.655.155-20.156 2.074C85.57 3.994 79.386 8.03 76.41 14.131c-1.828 3.752-2.35 8.047-4.265 11.756-3.635 7.035-11.58 10.694-19.25 12.605-7.671 1.911-15.758 2.647-22.849 6.156-7.09 3.509-13.137 10.92-11.83 18.732.788 4.725 4.03 8.59 6.668 12.588 2.638 3.994 4.812 8.966 3.176 13.47-2.291 6.324-10.224 7.888-16.271 10.811-8.35 4.036-14.627 14.407-10.475 22.713 2.771 5.537 9.177 8.318 15.307 9.092 6.13.774 12.365-.013 18.517.59 7.878.769 15.52 3.868 21.716 8.807 6.594 5.257 11.41 12.371 17.065 18.627 5.654 6.261 12.757 11.948 21.136 12.806 7.345.748 14.464-2.3 21.676-3.885 9.235-2.029 18.9-1.661 28.039-4.086 9.139-2.426 18.274-8.791 19.726-18.155.96-6.198-1.606-12.32-2.854-18.468-1.895-9.326-.468-19.735 5.671-27 8.338-9.861 23.72-12.479 30.151-23.683 6.301-10.949.175-26.155-10.892-32.206Z"
      fill="#D5DCEF"
    />
    <path
      d="M110.476 119.708v12.166H99.638v-11.839c-10.729-.653-21.024-4.019-26.987-8.691l5.96-13.249c5.42 4.019 13.22 6.951 21.023 7.712V87.669c-12.03-2.931-25.468-6.95-25.468-22.483 0-11.513 8.346-21.395 25.468-23.352V29.78h10.838v11.84c8.129.652 16.037 2.822 22.001 6.624l-5.417 13.357c-5.525-3.149-11.163-4.997-16.58-5.645V74.42c12.031 2.822 25.252 6.841 25.252 22.156 0 11.292-8.238 21.065-25.252 23.131ZM99.638 71.702V56.28c-5.742 1.304-8.02 4.453-8.02 8.038 0 3.801 3.25 5.863 8.02 7.385Zm18.642 26.176c0-3.802-3.142-5.864-7.804-7.495v14.989c5.417-1.196 7.804-4.019 7.804-7.494Z"
      fill="url(#a)"
    />
    <path
      d="M135.728 37.129a5.01 5.01 0 0 1-5.004 5.014 5.01 5.01 0 0 1 5.004 5.014 5.01 5.01 0 0 1 5.003-5.014c-2.762.004-5.003-2.242-5.003-5.014Z"
      fill="url(#b)"
    />
    <path
      d="M138.119 47.48a2.621 2.621 0 0 1-2.617 2.622 2.621 2.621 0 0 1 2.617 2.622 2.621 2.621 0 0 1 2.617-2.622 2.618 2.618 0 0 1-2.617-2.623Z"
      fill="url(#c)"
    />
    <path
      d="M78.731 81.597a2.62 2.62 0 0 1-2.616 2.622 2.62 2.62 0 0 1 2.616 2.622 2.62 2.62 0 0 1 2.617-2.622 2.624 2.624 0 0 1-2.617-2.622Z"
      fill="url(#d)"
    />
    <path
      d="m111.77 133.609 7.036-1.506 1.385-6.779 7.316-.414 2.065-6.386 6.427-.196 6.226-7.474"
      stroke="url(#e)"
      strokeWidth={3}
      strokeMiterlimit={10}
    />
    <path d="m138.069 111.695 4.39-1.133-.609 4.337" stroke="url(#f)" strokeWidth={3} strokeMiterlimit={10} />
    <path
      d="m64.868 108.626-.1-.009v-.61l-3.422.305-3.422-.305v.61l-.1.009s-14.79 11.634-12.8 29.019c0 0-.413 6.671 16.322 6.407 16.734.264 16.32-6.407 16.32-6.407 1.992-17.385-12.798-29.019-12.798-29.019Z"
      fill="url(#g)"
    />
    <path
      d="M65.31 100.496c-1.644.154-2.783-.502-3.405-1.012a.869.869 0 0 0-1.119 0c-.621.51-1.76 1.166-3.405 1.012-2.625-.247-4.081-.694-4.548.263l5.42 9.314 3.089 2.701 3.088-2.701 5.42-9.314c-.459-.957-1.92-.51-4.54-.263Z"
      fill="url(#h)"
    />
    <path
      d="M62.456 133.48v2.15H60.54v-2.096c-1.898-.117-3.718-.711-4.774-1.534l1.056-2.342c.96.711 2.337 1.229 3.718 1.363v-3.208c-2.128-.518-4.502-1.229-4.502-3.977 0-2.037 1.477-3.785 4.502-4.132v-2.133h1.916v2.096c1.44.112 2.838.497 3.89 1.171l-.96 2.362c-.977-.556-1.974-.882-2.934-.999v3.266c2.128.498 4.465 1.209 4.465 3.919.004 1.999-1.452 3.73-4.461 4.094Zm-1.916-8.49v-2.726c-1.014.23-1.419.786-1.419 1.422 0 .669.576 1.032 1.42 1.304Zm3.297 4.63c0-.673-.555-1.037-1.381-1.326v2.652c.96-.214 1.381-.711 1.381-1.326Z"
      fill="url(#i)"
    />
    <path
      d="M59.155 100.341a4.677 4.677 0 0 1-1.774.155c-.338-.034-.66-.067-.96-.105l3.41 7.607-.676-7.657Z"
      fill="url(#j)"
    />
    <path
      d="M59.155 100.341a4.677 4.677 0 0 1-1.774.155c-.338-.034-.66-.067-.96-.105l3.41 7.607-.676-7.657Z"
      fill="url(#k)"
    />
    <path
      d="m62.94 108.626 5.308-8.44c-.734.038-1.707.197-2.942.314a4.615 4.615 0 0 1-2.166-.289l-1.39 7.796 1.19.619Z"
      fill="url(#l)"
    />
    <path
      d="m62.94 108.626 5.308-8.44c-.734.038-1.707.197-2.942.314a4.615 4.615 0 0 1-2.166-.289l-1.39 7.796 1.19.619Z"
      fill="url(#m)"
    />
    <path
      d="M57.206 109.337a.715.715 0 0 1-.71-.661.708.708 0 0 1 .656-.761l8.388-.619a.713.713 0 0 1 .76.657.708.708 0 0 1-.656.761l-8.392.619a.164.164 0 0 1-.046.004Z"
      fill="url(#n)"
    />
    <path
      d="M65.552 110.211h-.012l-8.413-.159a.713.713 0 0 1 .012-1.426h.013l8.413.159a.713.713 0 0 1-.013 1.426Z"
      fill="url(#o)"
    />
    <path d="M144.537 138.691h-19.492v4.571h19.492v-4.571Z" fill="url(#p)" />
    <path d="M144.537 138.691h-19.492v.657h19.492v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M127.536 138.691h-.847v4.571h.847v-4.571ZM130.094 138.691h-.847v4.571h.847v-4.571ZM132.652 138.691h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M135.215 138.691h-.848v4.571h.848v-4.571ZM137.773 138.691h-.847v4.571h.847v-4.571ZM140.331 138.691h-.847v4.571h.847v-4.571ZM142.889 138.691h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M143.219 138.691h-10.667v4.571h10.667v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M143.219 138.691h-2.705v4.571h2.705v-4.571Z" fill="#FCE8C5" />
    <path d="M120.225 138.691h-19.493v4.571h19.493v-4.571Z" fill="url(#q)" />
    <path d="M120.225 138.691h-19.493v.657h19.493v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M103.228 138.691h-.848v4.571h.848v-4.571ZM105.786 138.691h-.848v4.571h.848v-4.571ZM108.344 138.691h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M110.902 138.691h-.847v4.571h.847v-4.571ZM113.46 138.691h-.847v4.571h.847v-4.571ZM116.018 138.691h-.847v4.571h.847v-4.571ZM118.576 138.691h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M118.91 138.691h-10.666v4.571h10.666v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M118.91 138.691h-2.704v4.571h2.704v-4.571Z" fill="#FCE8C5" />
    <path d="M90.307 138.691H70.815v4.571h19.492v-4.571Z" fill="url(#r)" />
    <path d="M90.307 138.691H70.815v.657h19.492v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M73.31 138.691h-.847v4.571h.847v-4.571ZM75.868 138.691h-.847v4.571h.847v-4.571ZM78.427 138.691h-.848v4.571h.848v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M80.985 138.691h-.847v4.571h.847v-4.571ZM83.543 138.691h-.847v4.571h.847v-4.571ZM86.105 138.691h-.847v4.571h.847v-4.571ZM88.663 138.691h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M88.993 138.691H78.326v4.571h10.667v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M88.993 138.691h-2.704v4.571h2.704v-4.571Z" fill="#FCE8C5" />
    <path d="M98.77 134.124H79.278v4.571H98.77v-4.571Z" fill="url(#s)" />
    <path d="M98.77 134.124H79.278v.657H98.77v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M81.773 134.124h-.847v4.571h.847v-4.571ZM84.332 134.124h-.848v4.571h.848v-4.571ZM86.89 134.124h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M89.448 134.124H88.6v4.571h.847v-4.571ZM92.006 134.124h-.847v4.571h.847v-4.571ZM94.564 134.124h-.847v4.571h.847v-4.571ZM97.126 134.124h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M97.456 134.124H86.79v4.571h10.666v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M97.456 134.124h-2.704v4.571h2.704v-4.571Z" fill="#FCE8C5" />
    <path d="M95.79 129.544H76.299v4.572h19.493v-4.572Z" fill="url(#t)" />
    <path d="M95.79 129.544H76.299v.657h19.493v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M78.79 129.544h-.848v4.572h.848v-4.572ZM81.348 129.544H80.5v4.572h.847v-4.572ZM83.906 129.544h-.847v4.572h.847v-4.572Z"
      fill="#FFBE00"
    />
    <path
      d="M86.468 129.544h-.847v4.572h.847v-4.572ZM89.026 129.544h-.847v4.572h.847v-4.572ZM91.584 129.544h-.847v4.572h.847v-4.572ZM94.143 129.544h-.848v4.572h.848v-4.572Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M94.472 129.544H83.806v4.572h10.666v-4.572Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M94.472 129.544h-2.704v4.572h2.704v-4.572Z" fill="#FCE8C5" />
    <path d="M148.114 134.124h-19.493v4.571h19.493v-4.571Z" fill="url(#u)" />
    <path d="M148.114 134.124h-19.493v.657h19.493v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M131.116 134.124h-.847v4.571h.847v-4.571ZM133.675 134.124h-.848v4.571h.848v-4.571ZM136.233 134.124h-.848v4.571h.848v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M138.791 134.124h-.847v4.571h.847v-4.571ZM141.349 134.124h-.847v4.571h.847v-4.571ZM143.911 134.124h-.847v4.571h.847v-4.571ZM146.469 134.124h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M146.799 134.124h-10.666v4.571h10.666v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M146.799 134.124h-2.704v4.571h2.704v-4.571Z" fill="#FCE8C5" />
    <path d="M147.254 129.544h-19.493v4.572h19.493v-4.572Z" fill="url(#v)" />
    <path d="M147.254 129.544h-19.493v.657h19.493v-.657Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M130.257 129.544h-.847v4.572h.847v-4.572ZM132.815 129.544h-.847v4.572h.847v-4.572ZM135.373 129.544h-.847v4.572h.847v-4.572Z"
      fill="#FFBE00"
    />
    <path
      d="M137.931 129.544h-.847v4.572h.847v-4.572ZM140.489 129.544h-.847v4.572h.847v-4.572ZM143.052 129.544h-.847v4.572h.847v-4.572ZM145.61 129.544h-.847v4.572h.847v-4.572Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M145.939 129.544h-10.666v4.572h10.666v-4.572Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M145.939 129.544h-2.704v4.572h2.704v-4.572Z" fill="#FCE8C5" />
    <path d="M150.834 124.974h-19.492v4.571h19.492v-4.571Z" fill="url(#w)" />
    <path d="M150.834 124.974h-19.492v.656h19.492v-.656Z" fill="#FCCC54" />
    <path
      opacity={0.3}
      d="M133.837 124.974h-.847v4.571h.847v-4.571ZM136.395 124.974h-.847v4.571h.847v-4.571ZM138.954 124.974h-.848v4.571h.848v-4.571Z"
      fill="#FFBE00"
    />
    <path
      d="M141.512 124.974h-.847v4.571h.847v-4.571ZM144.07 124.974h-.847v4.571h.847v-4.571ZM146.628 124.974h-.847v4.571h.847v-4.571ZM149.186 124.974h-.847v4.571h.847v-4.571Z"
      fill="#FFBE00"
    />
    <path opacity={0.5} d="M149.52 124.974h-10.666v4.571h10.666v-4.571Z" fill="#FFE6B3" />
    <path opacity={0.5} d="M149.52 124.974h-2.704v4.571h2.704v-4.571Z" fill="#FCE8C5" />
    <defs>
      <linearGradient id="a" x1={72.653} y1={80.825} x2={135.728} y2={80.825} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="b" x1={130.722} y1={42.145} x2={140.733} y2={42.145} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="c" x1={135.502} y1={50.102} x2={140.733} y2={50.102} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="d" x1={76.115} y1={84.217} x2={81.346} y2={84.217} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="e" x1={111.638} y1={122.336} x2={142.705} y2={122.336} gradientUnits="userSpaceOnUse">
        <stop stopColor="#474777" />
        <stop offset={1} stopColor="#393963" />
      </linearGradient>
      <linearGradient id="f" x1={139.787} y1={109.405} x2={143.747} y2={113.446} gradientUnits="userSpaceOnUse">
        <stop stopColor="#474777" />
        <stop offset={1} stopColor="#393963" />
      </linearGradient>
      <linearGradient id="g" x1={44.839} y1={126.032} x2={77.852} y2={126.032} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C5CCE9" />
        <stop offset={1} stopColor="#A2AFDB" />
      </linearGradient>
      <linearGradient id="h" x1={52.834} y1={106.029} x2={69.857} y2={106.029} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C5CCE9" />
        <stop offset={1} stopColor="#A2AFDB" />
      </linearGradient>
      <linearGradient id="i" x1={55.768} y1={126.603} x2={66.923} y2={126.603} gradientUnits="userSpaceOnUse">
        <stop stopColor="#474777" />
        <stop offset={1} stopColor="#393963" />
      </linearGradient>
      <linearGradient id="j" x1={56.091} y1={104.172} x2={59.831} y2={104.172} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C5CCE9" />
        <stop offset={1} stopColor="#A2AFDB" />
      </linearGradient>
      <linearGradient id="k" x1={52.834} y1={104.172} x2={69.856} y2={104.172} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A2AFDB" />
        <stop offset={1} stopColor="#C5CCE9" />
      </linearGradient>
      <linearGradient id="l" x1={61.756} y1={104.404} x2={68.819} y2={104.404} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C5CCE9" />
        <stop offset={1} stopColor="#A2AFDB" />
      </linearGradient>
      <linearGradient id="m" x1={52.834} y1={104.404} x2={69.857} y2={104.404} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A2AFDB" />
        <stop offset={1} stopColor="#C5CCE9" />
      </linearGradient>
      <linearGradient id="n" x1={56.495} y1={108.314} x2={66.307} y2={108.314} gradientUnits="userSpaceOnUse">
        <stop stopColor="#474777" />
        <stop offset={1} stopColor="#393963" />
      </linearGradient>
      <linearGradient id="o" x1={56.46} y1={108.963} x2={66.231} y2={109.87} gradientUnits="userSpaceOnUse">
        <stop stopColor="#474777" />
        <stop offset={1} stopColor="#393963" />
      </linearGradient>
      <linearGradient id="p" x1={125.043} y1={140.978} x2={144.536} y2={140.978} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="q" x1={100.732} y1={140.978} x2={120.225} y2={140.978} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="r" x1={70.816} y1={140.978} x2={90.309} y2={140.978} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="s" x1={79.278} y1={136.407} x2={98.772} y2={136.407} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="t" x1={76.296} y1={131.83} x2={95.789} y2={131.83} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="u" x1={128.622} y1={136.407} x2={148.115} y2={136.407} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="v" x1={127.763} y1={131.83} x2={147.256} y2={131.83} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
      <linearGradient id="w" x1={131.342} y1={127.259} x2={150.835} y2={127.259} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FEC008" />
        <stop offset={1} stopColor="#FE9C03" />
      </linearGradient>
    </defs>
  </svg>
)

const FXIllustartion = memo(SvgComponent)
export default FXIllustartion
