import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={150} height={150} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      opacity={0.3}
      d="M143.523 101.088c-15.176 35.189-55.235 50.303-86.622 47.726-8.57-.703-25.813-2.119-39.276-14.75C-8.23 109.809-4.248 59.107 20.503 29.258 23.69 25.413 45.753-.341 80.134.003c25.172.253 42.84 14.359 44.988 16.116 2.714 2.22 8.7 7.495 14.095 15.864 12.675 19.665 13.789 47.115 4.306 69.105Z"
      fill="url(#a)"
    />
    <path
      d="M130.75 19.336c-.179-.944-1.511-1.021-1.795-.103-2.741 8.875-10.661 31.925-22.257 43.972-18.88 19.613-31.93 51.904-20.587 69.083 0 0 64.172-10.114 44.639-112.952Z"
      fill="url(#b)"
    />
    <path
      opacity={0.43}
      d="M128.295 32.042c-.034.209-.09.476-.139.722l-.161.75-.339 1.498-.706 2.992c-.486 1.99-.997 3.975-1.527 5.955a326.969 326.969 0 0 1-3.365 11.824c-2.415 7.83-5.026 15.603-8.056 23.213-1.532 3.797-3.076 7.59-4.779 11.313-1.703 3.722-3.493 7.404-5.424 11.013-3.835 7.228-8.216 14.179-13.345 20.58a.2.2 0 0 0 .03.282.205.205 0 0 0 .278-.023c2.721-3.094 5.206-6.39 7.547-9.781 2.314-3.412 4.425-6.954 6.442-10.546 3.95-7.231 7.383-14.734 10.385-22.396 1.507-3.829 2.888-7.705 4.212-11.598a241.422 241.422 0 0 0 3.681-11.772c1.128-3.953 2.199-7.922 3.156-11.918.475-2 .931-4.003 1.362-6.012.211-1.006.424-2.01.619-3.02l.283-1.515.133-.76c.04-.26.087-.496.117-.796a.199.199 0 0 0-.179-.218.2.2 0 0 0-.217.166l-.008.047Z"
      fill="#fff"
    />
    <path
      d="M115.476.66C103.352 8.527 34.67 57.182 68.893 129.633c0 0 53.487-20.429 48.475-128.011-.044-.941-1.1-1.477-1.892-.962Z"
      fill="url(#c)"
    />
    <path
      opacity={0.43}
      d="M110.47 14.265a191.516 191.516 0 0 0-4.271 5.908 296.037 296.037 0 0 0-11.805 18.393c-4.937 8.367-9.482 16.972-13.445 25.846-3.95 8.874-7.339 18.024-9.7 27.464a114.175 114.175 0 0 0-1.55 7.129c-.106.599-.226 1.195-.32 1.797l-.286 1.802c-.166 1.205-.343 2.41-.465 3.621-.548 4.837-.677 9.728-.317 14.593a.371.371 0 0 0 .742-.055v-.004c-.373-4.809-.265-9.657.261-14.46.117-1.203.288-2.4.448-3.597l.279-1.791c.09-.598.208-1.191.31-1.787.434-2.379.93-4.748 1.516-7.095 2.315-9.402 5.658-18.536 9.566-27.403 3.92-8.867 8.426-17.474 13.325-25.846a295.985 295.985 0 0 1 11.723-18.412 189.844 189.844 0 0 1 4.24-5.912l.001-.002a.156.156 0 0 0-.032-.22.156.156 0 0 0-.22.031Z"
      fill="#fff"
    />
    <path
      d="M6.936 25.832c0-4.857 3.95-8.794 8.822-8.794h75.027c4.139 0 7.552 3.233 7.762 7.354l5.539 108.436c.164 3.225-2.382 5.945-5.621 6.004l-85.99 1.557c-3.043.055-5.539-2.389-5.539-5.423V25.832Z"
      fill="url(#d)"
    />
    <path
      d="M25.043 138.545h-.003l-9.622-.123c-3.217-.042-5.834-2.685-5.834-5.893v-14.482c0-.113.091-.204.205-.204.113 0 .205.091.205.204v14.482c0 2.985 2.436 5.444 5.43 5.483l9.621.124a.204.204 0 0 1-.002.409ZM9.789 113.767a.205.205 0 0 1-.205-.205v-2.345a.205.205 0 0 1 .41 0v2.345a.205.205 0 0 1-.205.205Z"
      fill="#fff"
    />
    <path
      d="M13.082 18.706a2.56 2.56 0 0 1 2.907-2.548c10.246 1.385 45.477 5.67 74.607 3.44a2.367 2.367 0 0 1 2.552 2.228l5.807 108.919a2.723 2.723 0 0 1-2.562 2.86c-12.251.722-62.705 3.517-80.702 1.637a2.155 2.155 0 0 1-1.933-2.131l-.676-114.405Z"
      fill="url(#e)"
    />
    <path
      opacity={0.6}
      d="M14.29 21.436a2.463 2.463 0 0 1 2.796-2.452c9.86 1.333 43.765 5.455 71.798 3.31a2.278 2.278 0 0 1 2.456 2.144l5.588 104.818a2.619 2.619 0 0 1-2.466 2.751c-11.79.695-60.344 3.384-77.663 1.576a2.076 2.076 0 0 1-1.86-2.051l-.65-110.096Z"
      fill="#fff"
    />
    <path
      opacity={0.6}
      d="M86.094 51.506c.45 0 .8-.367.776-.816l-.013-.251a.885.885 0 0 0-.863-.824l-63.512-.624c-.451-.004-.621.302-.379.681l.732 1.146c.243.378.81.688 1.26.688h61.999ZM23.064 54.23c-.45-.007-.68.328-.509.743l.416 1.012c.171.415.68.755 1.13.755h39.283c.45 0 .807-.367.791-.816l-.008-.25a.871.871 0 0 0-.848-.83l-40.255-.614ZM86.094 64.664c.45 0 .8-.367.777-.816l-.014-.252a.885.885 0 0 0-.862-.824l-63.512-.623c-.451-.005-.621.302-.379.68l.733 1.146c.242.378.809.689 1.26.689h61.997ZM23.064 67.387c-.45-.007-.68.328-.509.743l.416 1.012c.171.416.68.756 1.13.756h39.283c.45 0 .807-.368.791-.817l-.008-.25a.871.871 0 0 0-.848-.83l-40.255-.614ZM86.482 79.1c.45 0 .8-.366.776-.815l-.013-.252a.885.885 0 0 0-.863-.824l-63.511-.623c-.451-.005-.622.302-.38.68l.733 1.146c.242.379.81.689 1.26.689h61.998ZM86.677 87.228c.45 0 .8-.367.776-.816l-.013-.252a.885.885 0 0 0-.863-.824l-63.512-.624c-.45-.004-.62.303-.379.681l.733 1.146c.242.378.81.689 1.26.689h61.998ZM86.87 95.548c.451 0 .8-.367.777-.816l-.014-.251a.885.885 0 0 0-.862-.824l-63.512-.624c-.45-.004-.621.302-.379.681l.733 1.145c.242.38.81.69 1.26.69H86.87ZM86.677 104.062c.45 0 .8-.367.776-.816l-.013-.252a.886.886 0 0 0-.863-.824l-63.512-.623c-.45-.005-.62.302-.379.681l.733 1.145c.242.379.81.689 1.26.689h61.998ZM86.87 112.382c.451 0 .8-.367.777-.816l-.014-.252a.886.886 0 0 0-.862-.824l-63.512-.623c-.45-.005-.621.302-.379.681l.733 1.145c.242.379.81.689 1.26.689H86.87ZM86.87 121.283c.451 0 .8-.367.777-.816l-.014-.252a.886.886 0 0 0-.862-.824l-63.513-.623c-.45-.005-.621.302-.379.681l.733 1.145c.242.379.81.689 1.26.689H86.87Z"
      fill="#fff"
    />
    <path
      d="M57.925 2.252C55.215.373 52.858.41 51.199.898a3.298 3.298 0 0 0-2.35 3.468l.716 7.784 8.512.753s5.163-6.964-.152-10.65Zm-3.744 6.28a2.12 2.12 0 0 1-2.122-2.116A2.12 2.12 0 0 1 54.18 4.3a2.12 2.12 0 0 1 2.123 2.116 2.12 2.12 0 0 1-2.123 2.116Z"
      fill="url(#f)"
    />
    <path
      d="M50.416 8.875a.205.205 0 0 1-.204-.186l-.115-1.24a.206.206 0 0 1 .41-.037l.113 1.24a.205.205 0 0 1-.185.222l-.02.001Zm-.224-2.428a.205.205 0 0 1-.204-.187L49.9 5.32a3.149 3.149 0 0 1 2.24-3.303 6.384 6.384 0 0 1 3.111-.128.205.205 0 1 1-.082.401 5.98 5.98 0 0 0-2.913.12 2.738 2.738 0 0 0-1.946 2.873l.086.941a.205.205 0 0 1-.185.223h-.02Z"
      fill="#fff"
    />
    <path
      d="M37.946 17.18v-3.913a2.392 2.392 0 0 1 2.478-2.386l27.066.924a2.327 2.327 0 0 1 2.246 2.182l.226 3.76-32.016-.567Z"
      fill="url(#g)"
    />
    <path
      d="M48.04 12.355h-1.165a.205.205 0 1 1 0-.41h1.164a.205.205 0 1 1 0 .41ZM39.411 15.952a.205.205 0 0 1-.205-.205v-1.583c0-1.223.998-2.218 2.225-2.218h4.28a.205.205 0 1 1 0 .409h-4.28c-1 0-1.814.812-1.814 1.809v1.582a.205.205 0 0 1-.206.206Z"
      fill="#fff"
    />
    <path
      d="M26.918 18.168a2.547 2.547 0 0 1 2.548-2.42l47.33-.001a3.496 3.496 0 0 1 3.448 2.893l.04.23a2.998 2.998 0 0 1-2.96 3.506h-48.56a1.95 1.95 0 0 1-1.95-2.04l.104-2.168Z"
      fill="url(#h)"
    />
    <path
      d="M8.707 67.915c4.25 0 7.694-3.435 7.694-7.671 0-4.237-3.445-7.671-7.694-7.671-4.25 0-7.695 3.434-7.695 7.67 0 4.237 3.445 7.672 7.695 7.672Z"
      fill="url(#i)"
    />
    <path
      d="M8.707 67.66c4.109 0 7.44-3.32 7.44-7.416s-3.331-7.416-7.44-7.416c-4.108 0-7.439 3.32-7.439 7.416 0 4.095 3.33 7.415 7.44 7.415Z"
      fill="url(#j)"
    />
    <path
      d="M2.572 57.475a.31.31 0 0 1-.278-.452 7.153 7.153 0 0 1 6.413-3.936c.435 0 .871.04 1.295.116a.311.311 0 1 1-.112.613 6.655 6.655 0 0 0-1.183-.106 6.53 6.53 0 0 0-5.855 3.593.313.313 0 0 1-.28.172Z"
      fill="#fff"
    />
    <path
      opacity={0.78}
      d="M8.868 66.682c3.477 0 6.296-2.81 6.296-6.277 0-3.466-2.819-6.276-6.296-6.276-3.477 0-6.296 2.81-6.296 6.276 0 3.466 2.82 6.277 6.296 6.277Z"
      fill="#fff"
    />
    <path
      d="M8.251 65.071v-.683c-.714-.028-1.42-.196-1.922-.415a.395.395 0 0 1-.219-.466l.174-.636a.4.4 0 0 1 .542-.26 4.652 4.652 0 0 0 1.775.372c.688 0 1.2-.233 1.2-.71 0-.43-.396-.685-1.352-.94-1.364-.372-2.343-.965-2.343-2.162 0-1.08.793-1.906 2.169-2.127v-.683c0-.22.178-.398.399-.398h.402c.22 0 .4.179.4.398v.614a5.091 5.091 0 0 1 1.523.272.395.395 0 0 1 .248.478l-.16.588a.399.399 0 0 1-.525.268 4.171 4.171 0 0 0-1.494-.27c-.816 0-1.05.337-1.05.639 0 .372.49.627 1.551.953 1.516.453 2.145 1.08 2.145 2.208 0 1.034-.77 1.964-2.261 2.196v.764c0 .22-.179.398-.4.398h-.402a.398.398 0 0 1-.4-.398Z"
      fill="url(#k)"
    />
    <path
      d="M22.474 54.304c5.832 0 10.56-4.713 10.56-10.528 0-5.814-4.727-10.527-10.56-10.527-5.832 0-10.56 4.713-10.56 10.527 0 5.815 4.728 10.528 10.56 10.528Z"
      fill="url(#l)"
    />
    <path
      d="M22.475 53.954c5.638 0 10.209-4.557 10.209-10.177 0-5.62-4.571-10.177-10.21-10.177-5.637 0-10.208 4.556-10.208 10.177 0 5.62 4.57 10.177 10.209 10.177Z"
      fill="url(#m)"
    />
    <path
      d="M14.056 39.795a.245.245 0 0 1-.22-.356 9.633 9.633 0 0 1 8.638-5.302c.587 0 1.174.053 1.745.157a.246.246 0 1 1-.088.482 9.283 9.283 0 0 0-1.657-.148 9.142 9.142 0 0 0-8.198 5.032.246.246 0 0 1-.22.135Z"
      fill="#fff"
    />
    <path
      opacity={0.78}
      d="M28.806 50.089a8.595 8.595 0 0 0 0-12.181c-3.374-3.364-8.845-3.364-12.22 0a8.595 8.595 0 0 0 0 12.181c3.375 3.364 8.846 3.364 12.22 0Z"
      fill="#fff"
    />
    <path
      d="M21.85 50.402v-.937c-.981-.04-1.95-.27-2.638-.57a.541.541 0 0 1-.3-.64l.238-.873a.548.548 0 0 1 .744-.357 6.38 6.38 0 0 0 2.436.51c.943 0 1.647-.318 1.647-.972 0-.59-.544-.94-1.855-1.292-1.872-.51-3.216-1.323-3.216-2.966 0-1.483 1.088-2.615 2.975-2.919v-.936c0-.302.245-.546.548-.546h.552c.303 0 .548.244.548.546v.841c.907.037 1.567.19 2.091.375a.543.543 0 0 1 .34.655l-.22.808a.547.547 0 0 1-.72.367 5.72 5.72 0 0 0-2.05-.371c-1.12 0-1.44.462-1.44.877 0 .51.671.861 2.127 1.307 2.08.623 2.944 1.484 2.944 3.03 0 1.42-1.056 2.696-3.104 3.015v1.049a.547.547 0 0 1-.547.546h-.553a.548.548 0 0 1-.548-.547Z"
      fill="url(#n)"
    />
    <path
      d="M29.757 78.122c6.001 0 10.866-4.85 10.866-10.832 0-5.983-4.865-10.833-10.866-10.833-6.001 0-10.866 4.85-10.866 10.833 0 5.982 4.865 10.832 10.866 10.832Z"
      fill="url(#o)"
    />
    <path
      d="M29.757 77.762c5.802 0 10.505-4.689 10.505-10.472 0-5.784-4.703-10.473-10.505-10.473-5.801 0-10.505 4.689-10.505 10.473 0 5.783 4.704 10.472 10.505 10.472Z"
      fill="url(#p)"
    />
    <path
      d="M21.095 63.185a.245.245 0 0 1-.22-.356 9.905 9.905 0 0 1 8.882-5.452c.601 0 1.205.054 1.793.16a.246.246 0 1 1-.088.484 9.607 9.607 0 0 0-1.706-.153 9.415 9.415 0 0 0-8.442 5.182.244.244 0 0 1-.22.135Z"
      fill="#fff"
    />
    <path
      opacity={0.78}
      d="M36.272 73.785a8.844 8.844 0 0 0 0-12.535c-3.472-3.461-9.102-3.461-12.574 0a8.844 8.844 0 0 0 0 12.535c3.472 3.461 9.102 3.461 12.574 0Z"
      fill="#fff"
    />
    <path
      d="M29.113 74.107v-.965c-1.008-.04-2.005-.277-2.714-.586a.556.556 0 0 1-.309-.659l.246-.898c.09-.33.45-.5.766-.368.702.293 1.57.526 2.505.526.971 0 1.696-.329 1.696-1.002 0-.606-.56-.968-1.91-1.329-1.925-.525-3.308-1.362-3.308-3.052 0-1.526 1.12-2.692 3.062-3.003v-.965c0-.31.252-.562.564-.562h.568c.311 0 .564.252.564.562v.866c.933.037 1.612.196 2.151.385a.559.559 0 0 1 .35.675l-.226.831a.562.562 0 0 1-.742.378 5.89 5.89 0 0 0-2.11-.382c-1.152 0-1.481.476-1.481.903 0 .525.691.886 2.189 1.346 2.14.64 3.029 1.526 3.029 3.118 0 1.46-1.087 2.773-3.194 3.101v1.08c0 .31-.253.561-.564.561h-.568a.562.562 0 0 1-.564-.561Z"
      fill="url(#q)"
    />
    <path
      d="M43.697 60.47c4.397 0 7.962-3.553 7.962-7.936s-3.565-7.937-7.962-7.937-7.961 3.554-7.961 7.937c0 4.383 3.564 7.937 7.961 7.937Z"
      fill="url(#r)"
    />
    <path
      d="M43.697 60.207c4.25 0 7.697-3.435 7.697-7.673 0-4.238-3.446-7.673-7.697-7.673-4.25 0-7.697 3.435-7.697 7.673 0 4.238 3.446 7.673 7.697 7.673Z"
      fill="url(#s)"
    />
    <path
      d="M37.35 49.593a.246.246 0 0 1-.22-.356 7.323 7.323 0 0 1 6.567-4.031c.445 0 .891.04 1.326.118a.246.246 0 1 1-.088.483 6.972 6.972 0 0 0-1.238-.11 6.832 6.832 0 0 0-6.127 3.76.245.245 0 0 1-.22.136Z"
      fill="#fff"
    />
    <path
      opacity={0.78}
      d="M48.47 57.293a6.48 6.48 0 0 0 0-9.183 6.529 6.529 0 0 0-9.212 0 6.48 6.48 0 0 0 0 9.183 6.529 6.529 0 0 0 9.212 0Z"
      fill="#fff"
    />
    <path
      d="M43.226 57.529v-.707c-.739-.03-1.47-.203-1.989-.43a.408.408 0 0 1-.227-.482l.18-.658a.413.413 0 0 1 .561-.27c.515.216 1.15.386 1.837.386.711 0 1.242-.24 1.242-.733 0-.445-.41-.71-1.4-.974-1.41-.385-2.423-.998-2.423-2.237 0-1.118.82-1.972 2.243-2.2v-.707c0-.227.185-.411.413-.411h.416c.228 0 .413.184.413.411v.634a5.273 5.273 0 0 1 1.576.283.41.41 0 0 1 .257.494l-.165.609a.413.413 0 0 1-.544.277 4.311 4.311 0 0 0-1.546-.28c-.845 0-1.086.35-1.086.662 0 .385.507.65 1.604.986 1.568.468 2.22 1.118 2.22 2.284 0 1.07-.796 2.032-2.34 2.272v.791a.412.412 0 0 1-.413.411h-.416a.411.411 0 0 1-.413-.411Z"
      fill="url(#t)"
    />
    <path
      d="M78.402 115.286c-4.013 0-7.416-.849-10.21-2.545-2.795-1.696-4.192-3.919-4.192-6.67 0-2.035.716-3.75 2.15-5.143 1.432-1.392 3.17-2.089 5.212-2.089 2.15 0 3.878.554 5.186 1.661 1.307 1.107 1.961 2.571 1.961 4.393 0 1.321-.268 2.348-.806 3.08a10.667 10.667 0 0 1-1.854 1.955c-.698.572-1.209.983-1.531 1.233-.251.286-.376.642-.376 1.071 0 .536.34 1.027 1.02 1.473.681.447 1.505.67 2.473.67 2.937 0 5.328-1.589 7.174-4.768 1.845-3.178 2.767-6.446 2.767-9.803 0-1.893-.385-3.402-1.155-4.527s-2.051-1.688-3.842-1.688c-.896 0-1.738.107-2.526.322-.752.286-1.487.554-2.203.803-.43 0-.645-.285-.645-.857 0-.357.467-.616 1.402-.777.934-.16 1.833-.24 2.697-.24 3.02 0 5.538-1.054 7.551-3.162 2.014-2.106 3.02-4.731 3.02-7.874 0-1.536-.45-2.857-1.35-3.965-.9-1.106-2.339-1.66-4.319-1.66-1.656 0-3.033.258-4.13.774-1.099.516-1.647 1.13-1.647 1.842 0 .748.85 1.362 2.553 1.842 1.701.48 2.552 1.771 2.552 3.872 0 1.53-.61 2.741-1.827 3.63-1.218.891-2.74 1.336-4.568 1.336-1.755 0-3.17-.48-4.245-1.442-1.075-.961-1.612-2.26-1.612-3.9 0-1.709.716-3.23 2.15-4.566 1.432-1.335 3.026-2.314 4.782-2.937 1.755-.623 3.368-1.05 4.84-1.283 1.47-.23 3.049-.347 4.737-.347 4.204 0 7.733.722 10.59 2.163 2.856 1.442 4.284 3.463 4.284 6.062 0 3.027-1.308 5.316-3.923 6.864-2.615 1.55-5.607 2.324-8.974 2.324v.427c3.045 0 5.544.814 7.496 2.443 1.953 1.63 2.929 3.59 2.929 5.881 0 4.833-2.325 8.394-6.975 10.685-4.65 2.292-10.189 3.437-16.616 3.437Z"
      fill="url(#u)"
    />
    <path
      d="M146.811 91.34c0 6.178-2.526 11.714-7.577 16.606-5.052 4.893-10.981 7.34-17.788 7.34-4.586 0-8.168-1.518-10.748-4.554-2.579-3.035-3.869-6.964-3.869-11.786 0-6.464 2.606-12.07 7.819-16.821 5.213-4.75 11.061-7.125 17.546-7.125 4.478 0 8.034 1.473 10.667 4.42 2.633 2.946 3.95 6.92 3.95 11.92Zm-9.781-12.536c0-.929-.242-1.625-.725-2.09-.484-.464-1.209-.696-2.177-.696-1.11 0-2.141.42-3.09 1.259-.949.84-2.284 2.812-4.003 5.92-1.72 3.106-3.888 8.098-6.503 14.972-2.615 6.876-3.922 11.313-3.922 13.313 0 .929.241 1.625.725 2.089.484.465 1.209.697 2.176.697 1.147 0 2.177-.42 3.09-1.259.914-.839 2.266-2.848 4.058-6.027 1.791-3.178 3.967-8.187 6.529-15.027 2.561-6.838 3.842-11.223 3.842-13.151Z"
      fill="url(#v)"
    />
    <path
      d="M94.645 124.098a8.618 8.618 0 0 0-.155.408.821.821 0 0 0-.047.262c0 .062.015.109.047.14.031.032.078.047.14.047.278 0 .554-.178.827-.536.273-.356.466-.627.578-.81.112-.182.257-.426.436-.729l.175.08c-.296.545-.558.978-.786 1.299a3.417 3.417 0 0 1-.9.857c-.372.25-.795.375-1.27.375-.411 0-.754-.127-1.027-.381-.273-.254-.41-.596-.41-1.024l.014-.174c-.349.527-.692.922-1.027 1.185-.335.263-.755.395-1.257.395-.555 0-1.003-.188-1.343-.563-.34-.375-.51-.888-.51-1.54 0-1.026.427-2.035 1.283-3.026.855-.992 1.825-1.487 2.908-1.487.439 0 .781.08 1.028.241.246.161.37.415.37.763l-.014.201c.053-.142.226-.58.517-1.312.29-.732.495-1.248.611-1.547.116-.299.202-.527.256-.683.053-.156.08-.275.08-.355 0-.169-.072-.274-.215-.315-.143-.04-.461-.06-.954-.06v-.214h4.098l-3.453 8.503Zm-1.115-4.245c0-.143-.032-.25-.094-.322-.063-.071-.157-.107-.283-.107-.17 0-.351.116-.543.348-.193.233-.455.676-.786 1.333a46.714 46.714 0 0 0-1.041 2.223c-.363.826-.544 1.355-.544 1.587 0 .08.02.143.06.188.04.045.096.066.167.066.323 0 .605-.129.847-.388s.43-.484.564-.676c.135-.192.284-.464.45-.817.166-.352.408-.94.726-1.761.318-.822.477-1.38.477-1.674Z"
      fill="url(#w)"
    />
    <path
      d="m105.809 119.009-2.324 5.089c-.027.054-.072.17-.135.348-.062.179-.094.291-.094.335 0 .072.016.128.048.167.031.04.078.06.14.06.126 0 .3-.089.524-.268.224-.178.464-.43.719-.756.256-.326.486-.69.693-1.092l.174.081c-.251.464-.508.877-.773 1.238a3.486 3.486 0 0 1-.987.911c-.395.245-.869.368-1.424.368-.448 0-.784-.122-1.008-.368-.224-.245-.336-.614-.336-1.105-.349.518-.683.893-1 1.125-.319.232-.728.348-1.23.348-.537 0-.979-.172-1.323-.515-.345-.343-.517-.792-.517-1.346 0-1.053.486-2.109 1.457-3.167.972-1.058 2.049-1.587 3.231-1.587.278 0 .528.067.753.201.223.134.335.344.335.63l-.04.321.47-1.018h2.647Zm-3.251.723c0-.142-.029-.247-.087-.315-.059-.067-.15-.101-.275-.101-.171 0-.365.134-.585.402-.22.268-.504.737-.853 1.406-.35.67-.699 1.411-1.048 2.224-.35.812-.524 1.339-.524 1.58 0 .08.017.143.053.187.036.045.09.067.162.067.277 0 .541-.136.792-.408.251-.272.444-.504.578-.696.134-.192.311-.518.531-.978.219-.46.484-1.051.793-1.774.309-.723.463-1.254.463-1.594Z"
      fill="url(#x)"
    />
    <path
      d="M106.991 128.464c-.564 0-1.034-.152-1.411-.455-.376-.304-.564-.661-.564-1.072 0-.321.121-.607.363-.857s.568-.375.981-.375c.34 0 .633.11.88.328.246.219.37.489.37.81 0 .482-.234.79-.699.924-.233.036-.399.06-.497.074-.099.014-.148.069-.148.167 0 .081.047.141.141.181.094.041.236.06.424.06.466 0 .892-.205 1.278-.615.385-.41.714-.882.988-1.417a43.89 43.89 0 0 0 1.083-2.352l-.04-.014c-.341.53-.698.937-1.07 1.219-.373.283-.819.425-1.34.425a1.62 1.62 0 0 1-1.074-.383c-.305-.255-.457-.646-.457-1.175 0-.241.058-.519.175-.832.116-.313.248-.626.396-.94.148-.313.401-.801.759-1.463s.537-1.056.537-1.181c0-.071-.018-.125-.053-.161-.036-.035-.09-.053-.162-.053-.224 0-.459.152-.705.456-.246.303-.463.6-.651.891-.188.291-.336.525-.443.703l-.175-.08c.501-.825.927-1.432 1.276-1.822.35-.39.847-.585 1.492-.585.465 0 .819.145 1.061.436.242.291.363.641.363 1.053 0 .313-.036.568-.108.765-.072.197-.197.483-.376.859-.18.376-.441.893-.786 1.551-.345.657-.517 1.089-.517 1.295 0 .089.021.157.061.201.039.045.101.067.181.067.099 0 .215-.04.349-.12.135-.081.28-.199.437-.355.156-.157.324-.363.504-.618.179-.255.365-.581.558-.979.192-.398.472-1.017.839-1.858.367-.84.589-1.361.665-1.562.076-.201.155-.401.236-.597h2.62c-.126.304-.307.75-.544 1.339-.238.589-.482 1.184-.732 1.781-.251.599-.634 1.467-1.149 2.605-.516 1.138-1.211 2.044-2.09 2.719-.88.675-1.955 1.012-3.226 1.012Z"
      fill="url(#y)"
    />
    <path
      d="M118.391 118.875c.566 0 1.049.14 1.449.422.399.282.599.632.599 1.051 0 .313-.096.578-.29.797a.942.942 0 0 1-.737.328c-.262 0-.505-.102-.73-.308a.959.959 0 0 1-.338-.736c0-.161.042-.306.127-.435a.775.775 0 0 1 .283-.275c.102-.053.232-.096.389-.127s.236-.092.236-.181c0-.081-.075-.156-.222-.228-.148-.071-.351-.107-.611-.107-.359 0-.654.087-.887.262a.81.81 0 0 0-.349.678c0 .214.04.385.12.51.081.125.225.281.431.469l1.076.94c.243.224.422.452.539.685.116.232.174.501.174.805 0 .662-.31 1.176-.929 1.543-.62.367-1.307.55-2.062.55a3.329 3.329 0 0 1-1.826-.518c-.543-.345-.815-.796-.815-1.352a1.06 1.06 0 0 1 1.081-1.076c.261 0 .505.107.731.321.225.215.338.465.338.75a.858.858 0 0 1-.175.536c-.117.152-.247.243-.39.274a31.83 31.83 0 0 0-.355.081c-.094.022-.141.074-.141.154 0 .128.123.263.37.404.246.141.539.212.88.212.304 0 .568-.085.792-.255a.79.79 0 0 0 .336-.658c0-.232-.04-.411-.121-.537a2.076 2.076 0 0 0-.369-.409 87.206 87.206 0 0 0-.618-.544 5.08 5.08 0 0 1-.565-.556 2.161 2.161 0 0 1-.302-.47c-.072-.156-.107-.36-.107-.611 0-.599.271-1.147.815-1.644.543-.496 1.266-.745 2.173-.745Z"
      fill="url(#z)"
    />
    <path
      d="M34.392 146.67c-1.48.128-4.047.335-6.07.424-1.217.053-1.917-.066-2.321-.227 0 .046.002.088.004.128.01.212.182.382.397.394 3.825.213 6.866.074 7.949.008a.297.297 0 0 0 .243-.446 2.467 2.467 0 0 0-.202-.281Z"
      fill="url(#A)"
    />
    <path
      d="M28.321 147.093c2.024-.089 4.592-.295 6.07-.423-1.453-1.778-6.07-2.977-6.07-2.977h-1.303c-.897 1.288-1.027 2.515-1.017 3.174.403.161 1.104.28 2.32.226Z"
      fill="url(#B)"
    />
    <path
      d="m26.798 141.571.122 2.407c.013.26.209.479.47.517.261.037.61.042.98-.081a.65.65 0 0 0 .438-.5l.422-2.342h-2.432v-.001Z"
      fill="url(#C)"
    />
    <path
      d="M11.666 149.447c-.642-.115-.932-.545-1.053-1.003l-.002.012c-.095.484.124.986.561 1.225.529.288 1.107.337 1.556.314a1.44 1.44 0 0 0 1.166-.694l.004-.006c-.483.308-1.162.344-2.232.152Z"
      fill="url(#D)"
    />
    <path
      d="M14.691 142.313h-1.075c-1.638-.043-2.666 4.407-3.003 6.131.121.459.412.888 1.053 1.003 1.07.192 1.748.156 2.231-.152.885-1.5 1.324-3.697 1.534-4.98.24-1.458-.74-2.002-.74-2.002Z"
      fill="url(#E)"
    />
    <path
      d="m13.754 140.079-.598 2.367c-.073.29.067.59.336.728.334.171.804.35 1.236.298a.539.539 0 0 0 .44-.358l.876-2.49-2.29-.545Z"
      fill="url(#F)"
    />
    <path
      d="M34.756 108.902s-5.335 33.246-5.247 33.429c0 0-1.474.668-3.08.085 0 0 .482-17.772 1.613-24.587 0 0-9.106 15.885-11.997 23.8 0 0-1.508-.179-2.756-.998 0 0 9.804-28.593 12.42-32.401l9.047.672Z"
      fill="url(#G)"
    />
    <path
      d="M28.254 117.656a.156.156 0 0 1-.133-.24l1.993-3.175a.163.163 0 0 1 .103-.071l1.467-.294a.157.157 0 1 1 .062.308l-1.4.281-1.958 3.117a.157.157 0 0 1-.134.074Z"
      fill="url(#H)"
    />
    <path
      d="M59.24 76.347s-3.6.792-5.79 1.8c-.435.2-.782.55-.98.98-.655 1.431-2.614 5.017-6.414 6.728.547.724 1.428 2.23 1.812 4.762 2.282-1.694 4.253-4.522 5.199-9.16 0 0 .72.391 1.62-.044.474-.23 1.022-.556 1.433-.812.41-.255.716-.653.834-1.116.157-.613.065-1.152.065-1.73l1.85-.57c0-.001.556-.21.37-.838Z"
      fill="url(#I)"
    />
    <path
      d="M47.867 90.617c-.383-2.531-1.264-4.038-1.812-4.761-2.36 1.063-5.43 1.403-9.341.052a4.18 4.18 0 0 0-1.118-.22c-2.081-.121-8.94-.344-14.617 1.526a4.405 4.405 0 0 0-2.66 2.415c-1.536 3.512-4.021 11.511 2.88 15.55a17.05 17.05 0 0 1 1.665-3.142c-1.111-1.868-1.44-4.42.531-7.745 1.439 3.871 2.113 9.519 2.254 12.019a5.36 5.36 0 0 1-.422 2.404l-.036.083a.284.284 0 0 0 .2.388c3.886.87 7.926.634 9.134.534a.496.496 0 0 0 .444-.379c1.889-7.935 1.893-13.348 1.43-16.77 1.768.394 7.172 1.234 11.468-1.954Z"
      fill="url(#J)"
    />
    <path
      d="M36.408 92.785a.157.157 0 0 1-.156-.137c-.444-3.341-1.348-4.799-1.357-4.813a.157.157 0 0 1 .266-.169c.04.061.949 1.52 1.403 4.94a.157.157 0 0 1-.156.179Z"
      fill="url(#K)"
    />
    <path
      d="M26.82 81.065s-.393 4.143-.739 5.368a.418.418 0 0 0 .198.479c.587.334 1.996.88 3.923-.061a.871.871 0 0 0 .485-.82l-.17-4.004-3.697-.962Z"
      fill="url(#L)"
    />
    <path
      d="M30.602 75.766s1.256 2.878 1.34 4.39c.085 1.51.412 2.49-1.34 2.795-1.753.304-3.229-.566-4.03-2.071 0 0-1.252-2.32-.971-3.27.281-.948 5-1.844 5-1.844Z"
      fill="url(#M)"
    />
    <path
      d="m27.172 79.798.1-.044a.24.24 0 0 0 .118-.33c-.247-.476-.729-1.566-.107-1.82.802-.329 3.98-.975 4.665-2.099.659-1.08.075-2.474-.802-2.87a.12.12 0 0 0-.158.05l-.073.139a.12.12 0 0 1-.22-.023.119.119 0 0 0-.215-.03c-.21.336-.78.88-2.3 1.161-2.162.397-3.592 1.27-3.627 2.76a.12.12 0 0 1-.184.098c-.16-.098-.415-.143-.757.143-.594.498-.35 1.789.95 2.85.062.05.062.147-.005.19-.236.154-.588.518.324 1.004.942.503 1.646.461 1.918.417a.118.118 0 0 0 .096-.143l-.29-1.308a.119.119 0 0 1 .117-.144h.45v-.001Z"
      fill="url(#N)"
    />
    <path d="M27.226 80.074s-.479-1.839-1.306-1.323c-.827.515.43 2.06 1.094 2.129l.212-.806Z" fill="url(#O)" />
    <path
      d="M54.026 81.03a.156.156 0 0 1-.099-.035.156.156 0 0 1-.023-.22c.136-.168 1.345-1.64 1.81-1.903.17-.095.27-.194.292-.285a.234.234 0 0 0-.02-.148l-1.42.284-.805.688a.157.157 0 0 1-.205-.239l.836-.714a.157.157 0 0 1 .071-.035l1.572-.314a.157.157 0 0 1 .161.066c.115.17.154.33.117.484-.044.183-.189.343-.443.487-.35.197-1.361 1.385-1.72 1.826a.159.159 0 0 1-.124.058Z"
      fill="#F8A570"
    />
    <path
      d="m27.166 107.17 5.556.068-1.944-1.824a1.454 1.454 0 0 0-1.78-.167 4.23 4.23 0 0 0-.987.878s-3.467-1.263-5.146-4.088a17.056 17.056 0 0 0-1.666 3.142c1.506.881 3.459 1.574 5.967 1.991Z"
      fill="url(#P)"
    />
    <path
      d="m27.764 107.884.033.001 14.104-.015a.628.628 0 0 0 .63-.623.624.624 0 0 0-.631-.622l-14.105.015a.627.627 0 0 0-.63.623c0 .333.266.605.6.621Z"
      fill="url(#Q)"
    />
    <path
      d="M54.58 95.253H42.834c-.867 0-1.656.493-2.025 1.266l-5.43 11.357h14.596a1.36 1.36 0 0 0 1.266-.848l4.211-10.51c.243-.607-.21-1.265-.872-1.265Z"
      fill="url(#R)"
    />
    <path
      d="M46.304 101.076c-.254.78-.066 1.538.42 1.692.487.154 1.088-.353 1.343-1.133.254-.78.066-1.537-.42-1.691-.487-.155-1.088.352-1.343 1.132Z"
      fill="url(#S)"
    />
    <path
      d="M126.731 142.363s5.114-22.946-1.761-19.788c-6.876 3.157-.696 19.175 0 20.176.694 1.002 1.36 1.577 1.761-.388Z"
      fill="url(#T)"
    />
    <path
      d="M126.217 142.99s-2.229-15.878 4.149-14.663c6.377 1.215-3.282 14.531-3.344 15.104-.062.572-.805-.441-.805-.441Z"
      fill="url(#U)"
    />
    <path
      d="M125.4 143.076s-1.517-14.133-6.419-11.844c-4.903 2.29 5.69 11.898 5.86 12.38.17.482.559-.536.559-.536Z"
      fill="url(#V)"
    />
    <g opacity={0.7} fill="#fff">
      <path
        opacity={0.7}
        d="M127.17 125.168a.09.09 0 0 1-.086-.065c-.204-.683-.543-1.141-1.006-1.363-.654-.313-1.339-.044-1.346-.042a.09.09 0 0 1-.117-.05.09.09 0 0 1 .05-.117c.031-.012.766-.302 1.491.046.511.245.882.742 1.101 1.475a.09.09 0 0 1-.087.116ZM127.17 140.898a.091.091 0 0 1-.076-.14c.025-.037 2.449-3.789 4.05-7.253.497-1.075.57-2.015.217-2.794-.531-1.171-1.861-1.577-1.874-1.581a.09.09 0 0 1-.061-.112.09.09 0 0 1 .112-.061c.059.017 1.423.435 1.988 1.68.376.828.303 1.818-.217 2.944-1.607 3.475-4.038 7.238-4.062 7.276a.094.094 0 0 1-.077.041ZM124.112 140.851a.091.091 0 0 1-.09-.074c-.002-.015-.292-1.573-1.697-5.822-.541-1.636-1.264-2.642-2.091-2.907-.718-.231-1.283.172-1.289.176a.09.09 0 0 1-.126-.02.09.09 0 0 1 .019-.126c.026-.018.642-.459 1.448-.203.898.287 1.642 1.304 2.211 3.024 1.411 4.266 1.701 5.832 1.704 5.847a.091.091 0 0 1-.073.105h-.016Z"
      />
    </g>
    <path
      d="m121.322 142.308 1.389 4.939c.214.76.906 1.288 1.698 1.294l3.137.023a1.775 1.775 0 0 0 1.777-1.55l.654-5.182-8.655.476Z"
      fill="url(#W)"
    />
    <path
      d="m129.853 141.477-8.619.151c-.42.008-.758.375-.755.821.003.445.344.803.764.799l8.61-.081a.85.85 0 0 0 .833-.856.824.824 0 0 0-.833-.834Z"
      fill="url(#X)"
    />
    <path
      d="M42.47 35.478h2.568v2.016h-5.232v-8.496h2.664v6.48Zm7.546 2.1c-.8 0-1.536-.188-2.208-.564a4.234 4.234 0 0 1-1.584-1.56c-.392-.664-.588-1.412-.588-2.244 0-.832.196-1.58.588-2.244.392-.664.92-1.18 1.584-1.548a4.446 4.446 0 0 1 2.208-.564c.8 0 1.532.188 2.196.564a4.06 4.06 0 0 1 1.572 1.548c.392.664.588 1.412.588 2.244 0 .832-.196 1.58-.588 2.244a4.122 4.122 0 0 1-1.584 1.56 4.356 4.356 0 0 1-2.184.564Zm0-2.484c.528 0 .936-.168 1.224-.504.288-.344.432-.804.432-1.38 0-.584-.144-1.044-.432-1.38-.288-.344-.696-.516-1.224-.516-.536 0-.948.172-1.236.516-.288.336-.432.796-.432 1.38 0 .576.144 1.036.432 1.38.288.336.7.504 1.236.504Zm10.765 1.116H57.95l-.42 1.284h-2.796l3.108-8.496h3.072l3.096 8.496h-2.808l-.42-1.284Zm-.648-2.004-.768-2.364-.768 2.364h1.536Zm12.63 3.288h-2.664l-2.82-4.272v4.272h-2.664v-8.496h2.664l2.82 4.344v-4.344h2.664v8.496Z"
      fill="#93278F"
    />
    <defs>
      <linearGradient id="a" x1={158.699} y1={168.695} x2={48.914} y2={49.827} gradientUnits="userSpaceOnUse">
        <stop stopColor="#B37CFF" />
        <stop offset={1} stopColor="#F895E7" />
      </linearGradient>
      <linearGradient id="b" x1={115.503} y1={67.888} x2={78.664} y2={186.623} gradientUnits="userSpaceOnUse">
        <stop stopColor="#DDA9C0" />
        <stop offset={1} stopColor="#B796D1" />
      </linearGradient>
      <linearGradient id="c" x1={81.585} y1={86.208} x2={115.861} y2={-28.092} gradientUnits="userSpaceOnUse">
        <stop stopColor="#CB9EDD" />
        <stop offset={1} stopColor="#D16383" />
      </linearGradient>
      <linearGradient id="d" x1={55.483} y1={133.105} x2={48.626} y2={-70.514} gradientUnits="userSpaceOnUse">
        <stop stopColor="#8E9BFF" />
        <stop offset={1} stopColor="#5B42FF" />
      </linearGradient>
      <linearGradient id="e" x1={61.639} y1={24.752} x2={46.785} y2={157.886} gradientUnits="userSpaceOnUse">
        <stop stopColor="#53D8FF" />
        <stop offset={1} stopColor="#3840F7" />
      </linearGradient>
      <linearGradient id="f" x1={66.296} y1={-8.912} x2={31.922} y2={36.447} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="g" x1={70.081} y1={-6.043} x2={35.708} y2={39.315} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="h" x1={52.529} y1={-4.072} x2={54.266} y2={36.175} gradientUnits="userSpaceOnUse">
        <stop stopColor="#53D8FF" />
        <stop offset={1} stopColor="#3840F7" />
      </linearGradient>
      <linearGradient id="i" x1={-1.823} y1={72.427} x2={8.461} y2={60.453} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="j" x1={14.331} y1={51.775} x2={-16.056} y2={97.824} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="k" x1={13.42} y1={53.092} x2={-2.756} y2={80.334} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="l" x1={8.024} y1={60.497} x2={22.137} y2={44.064} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="m" x1={30.192} y1={32.154} x2={-11.51} y2={95.352} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="n" x1={28.943} y1={33.961} x2={6.743} y2={71.348} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="o" x1={14.888} y1={84.495} x2={29.411} y2={67.586} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="p" x1={37.699} y1={55.33} x2={-5.213} y2={120.36} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="q" x1={36.413} y1={57.19} x2={13.569} y2={95.66} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="r" x1={32.803} y1={65.14} x2={43.444} y2={52.751} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="s" x1={49.516} y1={43.771} x2={18.075} y2={91.418} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="t" x1={48.574} y1={45.134} x2={31.837} y2={73.321} gradientUnits="userSpaceOnUse">
        <stop stopColor="#FDF53F" />
        <stop offset={1} stopColor="#D93C65" />
      </linearGradient>
      <linearGradient id="u" x1={64} y1={95.143} x2={104.465} y2={95.143} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="v" x1={106.829} y1={95.143} x2={146.811} y2={95.143} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="w" x1={88.129} y1={120.542} x2={98.097} y2={120.542} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="x" x1={96.955} y1={122.183} x2={105.809} y2={122.183} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="y" x1={105.016} y1={123.668} x2={114.729} y2={123.668} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="z" x1={114.017} y1={122.197} x2={120.439} y2={122.197} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="A" x1={26.001} y1={147.087} x2={34.636} y2={147.087} gradientUnits="userSpaceOnUse">
        <stop stopColor="#53D8FF" />
        <stop offset={1} stopColor="#3840F7" />
      </linearGradient>
      <linearGradient id="B" x1={26} y1={145.4} x2={34.392} y2={145.4} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="C" x1={26.798} y1={143.045} x2={29.23} y2={143.045} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="D" x1={10.589} y1={149.221} x2={13.898} y2={149.221} gradientUnits="userSpaceOnUse">
        <stop stopColor="#53D8FF" />
        <stop offset={1} stopColor="#3840F7" />
      </linearGradient>
      <linearGradient id="E" x1={10.613} y1={145.939} x2={15.47} y2={145.939} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="F" x1={13.137} y1={141.78} x2={16.044} y2={141.78} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="G" x1={13.576} y1={136.98} x2={58.243} y2={99.505} gradientUnits="userSpaceOnUse">
        <stop stopColor="#CB236D" />
        <stop offset={1} stopColor="#4C246D" />
      </linearGradient>
      <linearGradient id="H" x1={29.985} y1={97.274} x2={29.985} y2={144.082} gradientUnits="userSpaceOnUse">
        <stop stopColor="#939DC6" />
        <stop offset={0.996} stopColor="#E39AB7" />
      </linearGradient>
      <linearGradient id="I" x1={53.118} y1={80.743} x2={41.651} y2={95.709} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="J" x1={16.915} y1={79.515} x2={37.209} y2={99.329} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A737D5" />
        <stop offset={1} stopColor="#EF497A" />
      </linearGradient>
      <linearGradient id="K" x1={39.19} y1={82.069} x2={32.17} y2={98.589} gradientUnits="userSpaceOnUse">
        <stop stopColor="#909AC6" />
        <stop offset={0.996} stopColor="#E295B4" />
      </linearGradient>
      <linearGradient id="L" x1={27.458} y1={90.393} x2={28.709} y2={83.8} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="M" x1={30.865} y1={78.3} x2={23.696} y2={83.803} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="N" x1={25.807} y1={73.96} x2={32.473} y2={82.57} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="O" x1={29.974} y1={77.138} x2={22.805} y2={82.641} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="P" x1={34.187} y1={95.076} x2={29.179} y2={102.611} gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9B776" />
        <stop offset={1} stopColor="#F47960" />
      </linearGradient>
      <linearGradient id="Q" x1={25.372} y1={104.155} x2={36.561} y2={107.836} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="R" x1={40.781} y1={96.927} x2={48.77} y2={105.397} gradientUnits="userSpaceOnUse">
        <stop stopColor="#2B3582" />
        <stop offset={1} stopColor="#150E42" />
      </linearGradient>
      <linearGradient id="S" x1={45.641} y1={99.038} x2={49.248} y2={104.487} gradientUnits="userSpaceOnUse">
        <stop stopColor="#53D8FF" />
        <stop offset={1} stopColor="#3840F7" />
      </linearGradient>
      <linearGradient id="T" x1={124.966} y1={126.613} x2={131.495} y2={199.96} gradientUnits="userSpaceOnUse">
        <stop stopColor="#C32B78" />
        <stop offset={1} stopColor="#593092" />
      </linearGradient>
      <linearGradient id="U" x1={118.383} y1={149.565} x2={135.306} y2={124.359} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A737D5" />
        <stop offset={1} stopColor="#EF497A" />
      </linearGradient>
      <linearGradient id="V" x1={120.847} y1={133.515} x2={127.633} y2={179.225} gradientUnits="userSpaceOnUse">
        <stop stopColor="#A737D5" />
        <stop offset={1} stopColor="#EF497A" />
      </linearGradient>
      <linearGradient id="W" x1={121.322} y1={145.199} x2={129.976} y2={145.199} gradientUnits="userSpaceOnUse">
        <stop stopColor="#18459F" />
        <stop offset={1} stopColor="#2874B5" />
      </linearGradient>
      <linearGradient id="X" x1={125.522} y1={141.703} x2={126.227} y2={149.623} gradientUnits="userSpaceOnUse">
        <stop stopColor="#18459F" />
        <stop offset={1} stopColor="#2874B5" />
      </linearGradient>
    </defs>
  </svg>
)

const OneMonthIllustration = memo(SvgComponent)
export default OneMonthIllustration
