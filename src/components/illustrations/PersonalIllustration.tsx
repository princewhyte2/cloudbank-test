import * as React from "react"
import { SVGProps, memo } from "react"

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg width={200} height={140} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M167.649 76.776c-11.98-16.404 4.486-16.313 10.899-28.85 1.543-1.863 4.094-5.543 4.826-9.587.641-3.54 1.143-9.013-.105-14.986-1.347-6.452-5.172-15.081-15.738-19.553C162.496 1.67 156.446.42 149.546.09c-5.485-.264-11.52.06-17.941.926-10.212 1.38-18.981 4.135-26.219 7.684-2.057-1.889-4.593-3.576-7.72-4.9C92.63 1.67 86.58.42 79.68.09c-5.486-.264-11.52.06-17.94.926C46.762 3.039 34.89 8.02 26.398 14.124a25.28 25.28 0 0 0-4.912-.478C9.62 13.646 0 21.799 0 31.856c0 7.189 4.914 13.404 12.05 16.365a454.536 454.536 0 0 1 1.387 16.631c.51 8.043.32 15.106-.56 20.996-1.083 7.225-5.528 16.984-5.528 16.984-9.904 16.116-4.922 32.691-3.183 37.168h186.191c4.884-13.3-6.653-41.24-22.708-63.224ZM12.805 95.724l-.154.166c1.056-2.799 1.86-6.026 2.404-9.666.908-6.079 1.104-13.336.58-21.571-.26-4.108-.588-8.127-.921-11.759 4.805 13.368 11.009 29.057-1.909 42.83ZM122.688 5.295a74.036 74.036 0 0 1 9.226-1.884c9.855-1.345 23.897-1.978 34.821 2.645 9.661 4.089 13.153 11.956 14.381 17.836.915 4.377.603 8.77-.218 12.541a35.398 35.398 0 0 0-.137-2.271C178.217 6.57 145.514 5.145 145.514 5.145c-8.77-.341-16.32-.273-22.826.15Z"
      fill="#FEE4CB"
    />
    <path
      opacity={0.5}
      d="M138.758 83.04c-.307-1.492-1.504-2.605-2.935-2.605-.262 0-.517.038-.759.108-.706-1.684-2.238-2.85-4.015-2.85a4.03 4.03 0 0 0-1.319.222c-.956-1.766-2.694-2.947-4.68-2.947-2.362 0-4.373 1.671-5.135 4.012a3.44 3.44 0 0 0-1.823-.527c-2.071 0-3.748 1.871-3.748 4.18 0 .138.006.272.018.406h24.396ZM43.376 55.146c-.308-1.491-1.504-2.604-2.935-2.604a2.74 2.74 0 0 0-.76.108c-.706-1.684-2.237-2.85-4.015-2.85a4.03 4.03 0 0 0-1.319.222c-.956-1.766-2.694-2.947-4.679-2.947-2.362 0-4.374 1.671-5.136 4.012a3.437 3.437 0 0 0-1.823-.527c-2.07 0-3.748 1.871-3.748 4.18 0 .137.007.272.019.406h24.396ZM85.902 100.384c-.308-1.491-1.504-2.604-2.935-2.604a2.74 2.74 0 0 0-.76.108c-.705-1.684-2.237-2.85-4.014-2.85-.46 0-.902.078-1.32.222-.955-1.766-2.693-2.946-4.678-2.946-2.362 0-4.374 1.671-5.136 4.012a3.436 3.436 0 0 0-1.822-.527c-2.07 0-3.748 1.87-3.748 4.18 0 .136.006.271.018.405h24.395ZM176.894 33.564c-.153-.746-.751-1.301-1.465-1.301-.131 0-.259.018-.38.053-.353-.84-1.118-1.424-2.006-1.424-.229 0-.45.04-.658.111-.478-.882-1.346-1.472-2.338-1.472-1.179 0-2.184.836-2.565 2.005a1.718 1.718 0 0 0-.911-.264c-1.034 0-1.872.935-1.872 2.089 0 .068.003.135.009.203h12.186ZM135.57 23.422c.374-1.82 1.835-3.177 3.58-3.177.32 0 .631.046.928.132.861-2.054 2.73-3.477 4.899-3.477.56 0 1.101.095 1.608.272 1.168-2.155 3.288-3.596 5.71-3.596 2.882 0 5.336 2.04 6.266 4.895a4.192 4.192 0 0 1 2.224-.643c2.526 0 4.574 2.284 4.574 5.1 0 .167-.007.332-.021.495H135.57v-.001ZM51.792 31.955c.55-2.675 2.698-4.671 5.265-4.671.471 0 .928.067 1.364.193 1.267-3.02 4.016-5.114 7.203-5.114.825 0 1.62.14 2.367.4 1.716-3.17 4.834-5.289 8.396-5.289 4.237 0 7.847 3 9.215 7.199a6.162 6.162 0 0 1 3.27-.946c3.715 0 6.726 3.359 6.726 7.5 0 .247-.012.49-.032.728H51.791Z"
      fill="#fff"
    />
    <path
      opacity={0.4}
      d="M148.557 49.017c-.371.697-.571 1.498-.974 2.171-.464.778-1.166 1.333-1.852 1.87-3.061 2.397-6.227 4.847-9.878 5.748-.917.226-1.888.367-2.656.967-1.59 1.238-1.438 4.382.263 5.423 1.946 1.191 4.878-.204 6.311 1.687.582.769.694 1.876 1.266 2.655.763 1.04 2.105 1.22 3.309 1.308.823.06 1.648.112 2.472.158-3.679-9.197 4.975-11.6 11.036-18.7a15.888 15.888 0 0 1-.519-.089c-.327-.06-.669-.14-.917-.383-.249-.244-.356-.707-.139-.986 1.201-.571 2.422-1.147 3.693-1.441.298-.487.582-.994.849-1.524a26.879 26.879 0 0 0 1.994-2.813 99.838 99.838 0 0 0-8.041.735c-2.354.319-5.006.944-6.217 3.214Z"
      fill="#fff"
    />
    <path
      d="M27.492 137.994s16.93-7.054 13.508-12.08c0 0-.055-1.8-6.422.909 0 0-2.565-.541-1.213-2.999 1.352-2.457 7.122-4.088 6.152-7.434-.97-3.347-4.432-.281-6.454-.473-2.022-.192 4.608-9.285 3.041-11.554-1.566-2.268-4.484 1.148-5.985.888-1.502-.26 1.715-13.416-5.439-14.69-7.154-1.276-3.001 6.689-1.767 10.861 1.234 4.171-3.704-.569-6.342 2.372-2.638 2.941 9.39 6.193 6.475 8.855-2.916 2.661-4.769-.85-6.799 1.222-3.28 3.35 9.308 5.484 7.435 8.01-1.494 2.013-4.367-1.499-5.777-.087-1.41 1.411 1.43 10.951 9.587 16.2Z"
      fill="#FEB546"
    />
    <path
      opacity={0.52}
      d="M41.213 126.283a2.388 2.388 0 0 0-.082-.156c-.49.407-1.05.837-1.674 1.261-2.29 1.559-5.924 3.356-10.266 3.104.24-2.247.33-4.692.269-7.321 3.863-4.322 7.292-6.016 9.489-6.675.19-.057.374-.107.552-.152a4.831 4.831 0 0 0-.053-.162c-.174.043-.353.092-.537.147-2.198.657-5.613 2.334-9.457 6.588v-.033c-.074-2.7-.305-5.597-.69-8.663.101-.231 1.068-2.427 2.59-4.856 1.094-1.744 2.65-3.874 4.456-5.348a1.599 1.599 0 0 0-.134-.113c-1.818 1.489-3.377 3.624-4.474 5.374a40.96 40.96 0 0 0-2.48 4.606c-.3-2.336-.69-4.769-1.166-7.288a161.24 161.24 0 0 0-3.97-16.165 4.998 4.998 0 0 0-.186-.005 161.23 161.23 0 0 1 3.981 16.201c.225 1.188.444 2.434.649 3.723a42.939 42.939 0 0 0-4.23-3.01c-1.823-1.144-4.372-2.552-7.212-3.567l-.018.021c-.036.04-.068.079-.098.119 2.846 1.011 5.402 2.423 7.23 3.567 2.476 1.553 4.145 2.94 4.37 3.129.448 2.861.826 5.928 1.036 9.032-3.35-2.485-9.85-4.559-13.099-5.494-.036.05-.07.099-.1.148 3.262.937 9.909 3.051 13.214 5.574.288 4.417.235 8.899-.431 12.955-3.319-1.247-6.116-4.573-7.886-7.161a40.462 40.462 0 0 1-2.471-4.146 1.115 1.115 0 0 0-.16.071 40.51 40.51 0 0 0 2.481 4.166c1.79 2.618 4.628 5.989 8.008 7.242-.294 1.742-.704 3.404-1.25 4.947l.077.049.109-.046c.745-2.121 1.27-4.557 1.572-7.286.283.017.566.026.85.026 1.653 0 3.317-.283 4.958-.842 1.56-.531 3.101-1.312 4.584-2.322a21.342 21.342 0 0 0 1.649-1.239Z"
      fill="#fff"
    />
    <path
      d="M29.549 136.96s1.348-10.931-8.561-20.798l-.914 3.949-.304-4.852s-6.006-5.499-11.26-8.258c0 0 3.267 12.753 4.878 15.304l3.619 2.158-3.752.354s1.65 7.141 6.77 11.578c5.12 4.436 9.524.565 9.524.565ZM199.999 125.034a18.308 18.308 0 0 0-7.403-.973c-.524.938-1.174 2.048-1.174 2.048l-.426-1.86c-8.817 1.404-15.045 8.535-15.045 8.535 5.622 2.043 10.098 2.008 13.587 1.009.092-.699.212-1.74.212-1.74l.898 1.38a16.36 16.36 0 0 0 4.237-2.307 74.327 74.327 0 0 1-.984-1.538l2.072.647c2.824-2.507 4.026-5.201 4.026-5.201Z"
      fill="#FF5B7E"
    />
    <path
      d="M189.54 133.793c.091-.7.211-1.741.211-1.741l.898 1.381a16.39 16.39 0 0 0 4.237-2.307c-.473-.715-.984-1.538-.984-1.538l2.072.647c2.823-2.508 4.026-5.202 4.026-5.202-10.397.947-24.047 7.749-24.047 7.749 5.621 2.043 10.096 2.01 13.587 1.011Z"
      fill="#E03268"
    />
    <path
      d="M168.935 131.226s-2.445-12.177 7.86-24.246l1.364 4.357-.07-5.494s6.286-6.773 11.96-10.389c0 0-2.59 14.676-4.185 17.705l-3.887 2.78 4.25.036s-1.25 8.2-6.631 13.692c-5.381 5.491-10.661 1.559-10.661 1.559Z"
      fill="#E03268"
    />
    <path
      d="M198.409 109.415c-.044 4.286-1.105 7.842-2.785 10.787-1.881-.188-4.125-.37-4.125-.37l2.859 2.325c-7.603 10.426-23.247 11.99-23.247 11.99-.069-9.425 2.656-15.357 6.406-19.066 1.226.54 3.038 1.362 3.038 1.362l-1.775-2.501c1.992-1.631 4.195-2.733 6.385-3.468.915 1.306 1.988 2.763 1.988 2.763l.151-3.373c5.879-1.393 11.105-.449 11.105-.449Z"
      fill="#07085B"
    />
    <path
      d="M177.517 115.082c1.225.539 3.038 1.362 3.038 1.362l-1.776-2.501c1.992-1.631 4.196-2.734 6.385-3.468a174.113 174.113 0 0 0 1.988 2.763l.152-3.373c5.879-1.394 11.104-.45 11.104-.45-7.782 12.963-27.299 24.733-27.299 24.733-.067-9.425 2.657-15.357 6.408-19.066Z"
      fill="#55769F"
    />
    <path
      d="M180.699 79.98c-4.628.047-2.276 6.743-1.571 8.52a28.86 28.86 0 0 0-3.314 3.288c.038-2.327 1.554-3.994 1.131-5.46-.473-1.642-2.044-3.043-3.458-.254-1.119 2.21 1.031 5.054 1.972 6.14a25.408 25.408 0 0 0-3.254 5.056c-.346-2.69 1.188-4.816.528-6.43-.723-1.766-2.611-3.112-3.802.188-.985 2.727 1.995 5.738 3.06 6.701-.573 1.265-.795 2.089-.819 2.177a47.743 47.743 0 0 0-1.07 4.861c-.359-2.363.58-4.444-.207-5.831-.945-1.665-2.972-2.739-3.691.745-.57 2.757 2.447 5.241 3.733 6.159a46.486 46.486 0 0 0-.384 9.256c-1.058-1.983-1.226-5.502-2.784-7.003-1.021-.986-1.95-.813-2.553-.491-.514.275-.85.786-.934 1.397-.474 3.453 4.712 5.95 6.304 6.63a46.479 46.479 0 0 0 1.548 9.095c-.556-1.022-1.387-2.566-1.786-3.386-.629-1.293-2.101-2.75-3.391-2.923a3.097 3.097 0 0 0-.157-.016c-.98-.065-1.763.673-1.902 1.668-.541 3.891 6.076 5.344 7.51 5.612l.015.053c1.902 6.332 4.469 10.058 4.578 10.214l.517-.367c-.025-.036-2.467-3.585-4.315-9.486 4.714-3.679 4.17-7.736 2.752-8.514-1.464-.804-3.718-.065-3.212 2.796.294 1.659.237 3.439.138 4.643a45.76 45.76 0 0 1-1.634-9.269c7.682-2.303 5.45-7.27 3.437-7.532-2.037-.267-2.733 1.066-2.75 3.468a9.936 9.936 0 0 1-.718 3.595 45.78 45.78 0 0 1 .344-9.089c1.417.516 5.111 1.578 6.646-.705 1.917-2.853-.115-3.915-1.856-3.664-1.602.231-2.435 2.817-4.723 3.897a46.942 46.942 0 0 1 1.178-5.575c.008-.031.454-1.683 1.792-4.007 1.374.698 4.926 2.204 6.734.179 2.272-2.544.362-3.854-1.415-3.839-1.587.015-2.718 2.298-5.001 3.125 1.183-1.94 2.967-4.265 5.579-6.492 1.429.714 4.879 2.122 6.652.137 2.272-2.544.362-3.855-1.417-3.839-1.609.014-2.748 2.365-5.097 3.16l-.045-.058c.512-.775 1.607-2.414 2.172-3.167.754-1.005 1.185-2.813.625-4.014-.563-1.202-1.685-1.35-1.685-1.35Z"
      fill="#FEB546"
    />
    <path
      d="M2.127 138.612s1.11-5.494 11.933-6.023c10.823-.528 11.933 3.294 28.027 1.676 16.095-1.618 24.217-8.05 49.561-7.091 25.343.959 21.525 6.074 46.893 6.58 25.369.505 29.244-3.727 42.707-2.271 13.463 1.457 18.752 7.44 18.752 7.44h-4.178l-193.695-.311Z"
      fill="#02CCC0"
    />
    <path
      d="M199.422 140H.578c-.319 0-.578-.241-.578-.538 0-.298.258-.539.578-.539h198.844c.319 0 .578.241.578.539 0 .297-.258.538-.578.538Z"
      fill="#07085B"
    />
    <path
      d="M46.033 80.144c1.037-4.033 3.408-6.898 5.295-6.399 1.888.5 2.576 4.174 1.538 8.208-.143.557.234.582.359.095 1.146-4.457.386-8.518-1.7-9.07-2.085-.55-4.704 2.615-5.851 7.072-.13.51.215.651.359.094Z"
      fill="#02CCC0"
    />
    <path d="m57.122 100.612-4.289 3.167-12.08-24.242 1.87-3.125L59 80.822l-1.878 19.79Z" fill="#00B0A5" />
    <path d="m52.833 103.778-18.868-4.993 6.767-21.575 16.592 4.39-4.49 22.178Z" fill="#02CCC0" />
    <path d="m59 80.822-16.376-4.41.93.805-2.822-.007 16.592 4.39.448-.56L59 80.823Z" fill="#008C83" />
    <path
      d="M44.84 80.343c1.122-4.361 3.685-7.458 5.725-6.918 2.04.54 2.785 4.512 1.663 8.873-.155.602.252.63.387.103 1.24-4.818.417-9.208-1.836-9.805-2.255-.596-5.086 2.826-6.327 7.645-.141.55.233.704.388.102Z"
      fill="#02CCC0"
    />
    <path d="m57.772 81.041-4.074 18.467 3.424 1.104L59 80.822l-1.228.219Z" fill="#E6E6E6" />
    <path
      d="M45.292 78.985c1.904-3.693 4.849-5.943 6.577-5.025 1.728.918 1.586 4.657-.318 8.35-.263.51.098.62.328.174 2.103-4.08 2.26-8.211.351-9.225-1.91-1.015-5.163 1.47-7.266 5.551-.24.467.065.685.328.175Z"
      fill="#FF5B7E"
    />
    <path d="m51.566 101.464-4.88 2.104-6.403-26.382 2.513-2.617 14.98 8.04-6.21 18.855Z" fill="#E8486A" />
    <path d="m46.687 103.568-17.28-9.18 11.369-19.476 15.195 8.073-9.284 20.583Z" fill="#FF5B7E" />
    <path d="m57.776 82.61-14.98-8.041.728.997-2.749-.654 15.196 8.073.56-.442 1.245.067Z" fill="#C23C59" />
    <path
      d="M44.085 78.906c2.058-3.992 5.241-6.424 7.11-5.432 1.868.993 1.714 5.034-.344 9.026-.285.552.107.67.355.189 2.274-4.412 2.444-8.877.38-9.973-2.064-1.097-5.581 1.59-7.855 6-.26.505.07.741.354.19Z"
      fill="#FF5B7E"
    />
    <path d="m56.532 82.543-8.057 17.062 3.091 1.859 6.21-18.854-1.244-.067Z" fill="#E6E6E6" />
    <path
      d="M46.114 75.82c1.923-2.01 4.245-2.885 5.185-1.957.94.928.145 3.31-1.778 5.318-.266.277-.053.419.179.176 2.124-2.22 3.004-4.85 1.964-5.877-1.04-1.025-3.605-.057-5.729 2.163-.243.254-.087.454.18.177Z"
      fill="#FEB546"
    />
    <path d="m45.922 91.527-3.541.406.843-18.249 2.113-1.197 8.139 8.099-7.554 10.941Z" fill="#EBA741" />
    <path d="m42.38 91.934-9.406-9.28L43.97 72.315l8.272 8.161-9.861 11.457Z" fill="#FEB546" />
    <path d="m53.476 80.586-8.14-8.099.282.785-1.648-.957 8.272 8.162.444-.176.79.285Z" fill="#B88233" />
    <path
      d="M45.351 75.532c2.079-2.171 4.588-3.119 5.605-2.115 1.016 1.003.156 3.578-1.922 5.75-.287.3-.057.453.193.19 2.296-2.4 3.248-5.245 2.124-6.354-1.123-1.109-3.896-.062-6.193 2.338-.263.276-.094.492.193.191Z"
      fill="#FEB546"
    />
    <path d="m52.686 80.301-8.407 9.427 1.643 1.8 7.554-10.942-.79-.285Z" fill="#E6E6E6" />
    <path
      d="M51.967 75.202c-.097.007-.212-.082-.29-.024-.603.456-1.008.568-1.112.457-.124-.133-.06-.293-.118-.386-.116-.185-.255-.02-.446-.189-.11-.096-.048-.246-.089-.353-.04-.107-.113-.169-.277-.225-.164-.057-.107-.265-.12-.409-.013-.144-.183-.108-.252-.211-.129-.191-.038-.655 1.326-1.611l1.212-.819 1.21-.103.533 1.459s-.309.41-.527 1.214c-.165.612-.436 1.15-1.05 1.2ZM68.954 94.317l-12.84 38.59s-4.408 3.878-4.217 1.615c.044-.526.696-4.268.75-4.96.465-5.808 1.735-17.202 2.756-21.112 1.103-4.23 3.723-11.257 3.723-11.257l9.828-2.876Z"
      fill="#FFC0BB"
    />
    <path
      d="m60.05 135.923-4.009-3.385-4.117 1.784 1.191 1.148 4.508 1.321s1.828.024 1.915-.018c.087-.043.512-.85.512-.85Z"
      fill="#FFC0BB"
    />
    <path
      d="m60.05 135.923 1.011.888c.47.405.128 1.182-.481 1.097l-8.432-1.171a.55.55 0 0 1-.465-.622l.241-1.793c5.37 2.596 7.385 2.313 8.125 1.601Z"
      fill="#07085B"
    />
    <path
      d="M81.583 77.385s6.183 19.957 5.358 22.723c-.528 1.77-10.382 29.612-10.538 29.56-.156-.051-4.094-1.223-4.094-1.223s7.314-27.206 6.956-28.948c-.357-1.743-7.772-17.827-7.772-17.827l10.09-4.285Z"
      fill="#FFC0BB"
    />
    <path
      d="m79.98 131.355-2.726-4.764-4.65.246.76 1.556 3.94 2.928s1.777.688 1.876.678c.1-.01.8-.644.8-.644Z"
      fill="#FFC0BB"
    />
    <path
      d="m79.98 131.355.676 1.235c.316.566-.29 1.202-.857.898l-7.827-4.209a.58.58 0 0 1-.235-.777l.867-1.664c4.334 4.489 6.401 4.944 7.376 4.517Z"
      fill="#07085B"
    />
    <path d="M79.265 99.497s-3.363 10.405-5.568 23.714l7.114-15.589-1.546-8.125Z" fill="#FFC0BB" />
    <path
      d="M75.889 46.014s4.063-2.064 3.155-7.905c-.285-1.842-1.999-2.48-1.7-4.93.3-2.45 1.075-5.459-1.414-8.235-2.489-2.775-4.782-3.103-7.895-3.15-3.247-.05-8.903 2.208-10.265 6.212-1.364 4.003-6.395.562-11.705 4.343-5.31 3.78-3.714 9.797-2.334 12.9 4.247 9.554 12.017 11.102 21.416 8.74 9.397-2.363 1.681-4.053 1.767-4.202.087-.15 8.975-3.773 8.975-3.773Z"
      fill="#F46C0F"
    />
    <path
      d="m69.943 39.35.28-3.384-3.76.291-1.054 4.19c-.128.496 1.428.741 1.887.957.533.25 1.03-1.123 1.858-1.232a.922.922 0 0 0 .79-.822Z"
      fill="#FFC0BB"
    />
    <path opacity={0.6} d="m70.029 38.316.194-2.35-3.759.291-.33 1.309c.782.424 2.354.991 3.895.75Z" fill="#FC8D84" />
    <path
      d="M74.153 34.46c.104-.311.179-.634.225-.966.141-.892.121-1.807.043-2.592a6.898 6.898 0 0 1-.029-.506 5.577 5.577 0 0 0-.451-2.071c-.949-2.216-3.263-3.56-5.626-3.262-3.183.401-5.281 3.44-4.668 6.547-.37-.12-.752-.088-1.052.128-.575.415-.627 1.342-.117 2.071.51.729 1.39.985 1.966.57.08-.058.148-.126.208-.202.787 2.59 3.324 4.196 5.876 3.633a4.87 4.87 0 0 0 2.968-2.027c.047-.06.096-.129.146-.208.22-.346.385-.723.511-1.116Z"
      fill="#FFC0BB"
    />
    <path
      d="M69.109 31.548a.481.481 0 0 1-.362.572.481.481 0 0 1-.201-.939.474.474 0 0 1 .563.367ZM73.14 30.936a.481.481 0 0 1-.363.572.481.481 0 0 1-.201-.939.473.473 0 0 1 .564.367Z"
      fill="#333"
    />
    <path
      d="M69.467 30.494a4.333 4.333 0 0 0-.707-.077 2.297 2.297 0 0 0-.658.08 2.16 2.16 0 0 0-.605.265l-.075.043c-.025.015-.046.035-.07.05l-.144.103c-.096.07-.183.154-.291.226.046-.117.1-.234.167-.343.078-.099.147-.213.248-.297.183-.187.428-.315.682-.386.256-.07.529-.072.78-.013.25.063.488.172.673.349ZM71.35 30.179c.12-.227.31-.409.529-.548.22-.139.478-.225.743-.241.263-.015.535.026.768.144.123.045.223.131.328.2.099.082.187.174.267.27-.125-.032-.234-.084-.347-.12l-.17-.049c-.028-.007-.054-.02-.082-.025l-.085-.016a2.108 2.108 0 0 0-.658-.056 2.337 2.337 0 0 0-.648.14c-.213.076-.425.179-.645.3Z"
      fill="#F46C0F"
    />
    <path
      d="M70.612 30.256c-.032.346-.008.692.056 1.035.032.172.077.342.143.511.069.168.152.337.303.483l.064.05.056.044c.024.02.057.035.076.06.046.04.08.09.102.144.05.108.028.244-.027.375-.121.266-.4.465-.704.612.335-.017.705-.152.924-.485a.716.716 0 0 0 .096-.604.574.574 0 0 0-.07-.15c-.026-.049-.064-.087-.1-.127-.036-.042-.08-.066-.121-.1-.025-.017-.03-.024-.043-.035l-.036-.028a1.279 1.279 0 0 1-.241-.365c-.073-.14-.122-.298-.18-.452-.104-.313-.196-.638-.298-.968Z"
      fill="#F99893"
    />
    <path
      d="M71.239 25.532s-2.503 5.292-7.593 6.077l-.854-3.71s1.685-1.977 1.905-2.232c.22-.253 3.633-1.45 3.633-1.45l2.846.416.063.899Z"
      fill="#F46C0F"
    />
    <path
      d="M63.07 43.6S57.217 64.354 51.263 71.83l1.971 1.369s11.446-15.01 13.196-21.632c1.752-6.62-3.362-7.965-3.362-7.965Z"
      fill="#FFC0BB"
    />
    <path
      d="M64.75 39.017s15.552-.336 12.714 13.013c0 0-1.26 4.591-1.05 6.087.21 1.495 2.206 5.53 1.996 9.333-.21 3.801 11.559 9.782 12.505 13.52 0 0-4.098 2.455-5.78 4.59-1.68 2.136-5.569 11.213-17.758 11.533-12.188.32-17.127.961-17.127.961s.525-4.484 6.094-11.105c5.57-6.62 4.309-24.988 9.247-29.473 0 0-6.2-17.482-.84-18.459Z"
      fill="#07085B"
    />
    <path
      opacity={0.3}
      d="M56.344 86.949c5.569-6.62 4.308-24.988 9.247-29.473 0 0-5.447-15.359-1.716-18.088 0 .003 5.079 14.671 7.39 16.807 0 0-4.265 8.756-4.497 13.028-.232 4.271 3.13 10.094 1.345 13.537-1.787 3.442-3.354 15.653 10.406 10.67-2.619 1.963-6.198 3.534-11.142 3.664-12.189.32-17.127.961-17.127.961s.525-4.486 6.094-11.106Z"
      fill="#02CCC0"
    />
    <path
      d="M64.999 58.027a.419.419 0 0 1-.325-.497.415.415 0 0 1 .486-.328c5.689 1.114 9.854.572 11.098.357a.415.415 0 0 1 .474.32v.003a.42.42 0 0 1-.33.508c-.7.125-2.225.341-4.387.341-1.893.001-4.274-.165-7.016-.704Zm11.644-.541.092.41-.092-.41Z"
      fill="#FF5B7E"
    />
    <path d="M68.588 34.477c.15.724.83 1.268 1.645 1.266.816-.003 1.492-.553 1.635-1.277l-3.28.011Z" fill="#fff" />
    <path
      d="M85.428 28.802c.078.059.19.006.196-.091.044-.763.2-3.162.392-3.194.23-.04.144 2.108.344 2.19.201.082.234-2.015.486-2.016.253-.001.16 1.909.266 1.947.107.037.389-1.784.536-1.876.149-.09.08 1.89.198 1.973.116.082.611-1.27.73-1.239.119.03.203.029-.052 3.396l-.156 1.32-.7 1.01-1.42-.344s-2.303-3.66-2.232-3.825c.068-.157.213-.159 1.412.749Z"
      fill="#FFC0BB"
    />
    <path
      d="M86.064 31.584s-3.6 12.854-4.404 13.23c-.805.377-8.056-1.494-11.03-2.934-2.976-1.44-6.403-2.499-7.29-.927-.886 1.573 2.921 8.737 16.637 9.134 0 0 5.322.98 6.828-5.921 1.506-6.902 1.581-13.103 1.581-13.103l-2.322.521ZM101.672 72.066a.116.116 0 0 0-.03-.202c-1.307-.483-1.381-.599-1.295-.732.089-.14 3.818-.695 3.818-.695l8.385-9.776c1.025-1.824 6.673-11.79 7.988-12.434.363-.178 1.359-.824 2.169-.854l-.37 8.708c-1.678 2.447-4.456 6.212-6.716 8.279-2.456 2.548-7.078 5.906-9.06 7.137l-2.5 2.259c-2.446 1.924-1.874.617-1.998.567-.122-.05-.367-.464-.45-.53-.082-.066-.166-.514-.332-.631-.165-.116-.17-.67.391-1.097Z"
      fill="#FFC0BB"
    />
    <path
      d="M125.808 35.513s-.139 3.26-1.415 5.272c-1.097 1.731-2.603 4.803.222 6.713 2.824 1.909 6.894-.683 6.953-.875.058-.19 1.421-2.34 1.312-4.058-.11-1.719.646-3.775-.748-5.23-1.396-1.454-6.324-1.822-6.324-1.822Z"
      fill="#07085B"
    />
    <path
      d="M140.65 42.039c-1.118-2.384-1.236-4.314-1.155-6.087.034-.743.315-2.866-1.114-4.874-2.07-2.905-4.65-3.867-7.512-3.34-3.314.608-5.285 4.674-5.086 7.183l6.071.12-1.671.339c-4.001 10.537-1.474 10.928-.8 12.282.675 1.355 4.845 2.746 8.116 2.163 5.264-.936 4.558-4.785 3.151-7.786Z"
      fill="#07085B"
    />
    <path
      d="m134.372 40.75.188 5.038s-1.87 1.553-5.121-.535c0 0 .646-.732.6-2.642-.048-1.953 4.333-1.86 4.333-1.86Z"
      fill="#FFC0BB"
    />
    <path
      opacity={0.6}
      d="m134.372 40.75.081 2.102c-.769 1.292-2.248 1.893-4.609 1.522.118-.416.213-.993.194-1.764-.047-1.952 4.334-1.86 4.334-1.86Z"
      fill="#FC8D84"
    />
    <path
      d="M127.45 35.592c.093.702-.28 1.33-.832 1.407-.553.075-1.075-.433-1.167-1.135-.093-.701.281-1.331.832-1.406.552-.075 1.075.434 1.167 1.134Z"
      fill="#F99893"
    />
    <path
      d="M126.511 38.38c-.09-.895-.02-1.802.1-2.577a6.47 6.47 0 0 0 .056-.501 5.534 5.534 0 0 1 .562-2.031c1.062-2.147 3.43-3.35 5.756-2.92 3.133.58 5.045 3.715 4.266 6.765.374-.099.751-.044 1.036.188.547.444.548 1.367.002 2.062-.547.695-1.432.898-1.98.454a1.033 1.033 0 0 1-.195-.211c-.922 2.526-3.526 3.977-6.024 3.273-1.89-.534-3.389-2.243-3.579-4.503Z"
      fill="#FFC0BB"
    />
    <path
      d="M129.177 35.68a.48.48 0 0 1-.362.571.476.476 0 0 1-.575-.471.473.473 0 0 1 .937-.1ZM133.245 36.532a.48.48 0 0 1-.362.572.476.476 0 0 1-.575-.472.473.473 0 0 1 .937-.1Z"
      fill="#333"
    />
    <path
      d="M130.882 35.38c-.083.299-.168.593-.269.878-.055.14-.104.283-.173.412a1.124 1.124 0 0 1-.24.337l-.037.028c-.013.01-.021.018-.041.032-.036.026-.075.046-.105.08-.033.032-.066.063-.09.103a.48.48 0 0 0-.064.122.62.62 0 0 0 .057.517c.084.15.211.26.348.34.139.078.288.127.439.149a1.767 1.767 0 0 1-.383-.232.91.91 0 0 1-.264-.33c-.052-.125-.072-.263-.019-.373.013-.027.024-.055.044-.078.016-.026.04-.047.062-.069.021-.023.053-.036.077-.055.028-.02.072-.05.106-.077a1.23 1.23 0 0 0 .281-.41c.066-.146.113-.297.152-.449a3.92 3.92 0 0 0 .119-.925Z"
      fill="#F99893"
    />
    <path
      d="M132.223 35.129c.25.004.482.02.705.059a2.338 2.338 0 0 1 1.17.552c.092.067.163.16.252.238.085.085.157.18.254.268a2.181 2.181 0 0 0-.1-.369c-.057-.113-.106-.237-.191-.336a1.527 1.527 0 0 0-.605-.502 1.554 1.554 0 0 0-.766-.146c-.258.018-.511.09-.719.236ZM130.182 34.697a1.45 1.45 0 0 0-.551-.524 1.565 1.565 0 0 0-1.512-.006c-.117.055-.214.145-.313.223a1.964 1.964 0 0 0-.245.29c.124-.037.23-.093.341-.132.114-.033.216-.086.328-.106.214-.069.43-.088.643-.091.214 0 .43.033.647.095.217.062.434.147.662.25ZM136.586 37.105c.285-.055.317-.03.666.011l.286-.044-.067-.364-.109-.052.234-.987-.136-1.032s-.885-2.949-.924-3.028c-.04-.079-1.056-1.273-1.121-1.339-.066-.066-1.933-.36-1.933-.36s-2.897-1.722-2.941.225c-.045 1.946 1.934 3.627 2.077 3.586-.243-.52.084-1.66.084-1.66.994 2.422 3.478 4.684 3.884 5.044Z"
      fill="#07085B"
    />
    <path d="M132.118 39.446c-.202.637-.867 1.064-1.601.984-.735-.08-1.294-.64-1.356-1.307l2.957.323Z" fill="#fff" />
    <path
      d="M122.788 44.752s-4.553 4.49-5.534 6.626c0 0 2.234 7.073 3.25 7.998l2.927-2.442-.643-12.182Z"
      fill="#FEB546"
    />
    <path
      d="M158.526 73.912a.117.117 0 0 1 .045-.198c1.338-.384 1.42-.494 1.345-.634-.079-.146-3.758-.98-3.758-.98l-7.653-10.376c-.89-1.896-5.801-12.259-7.065-12.998-.349-.205-1.297-.924-2.102-1.014l-.262 8.712c1.496 2.565 3.994 6.528 6.098 8.76 2.264 2.725 6.63 6.42 8.518 7.796l2.33 2.44c1.441 1.515 1.825.755 1.95.715.126-.04.4-.436.488-.495.087-.06.203-.5.377-.604.174-.105.217-.657-.311-1.124Z"
      fill="#FFC0BB"
    />
    <path
      d="m141.072 47.444 4.132 5.642s-3.782 6.123-4.623 7.333l-.98-1.549s-2.872-4.431-2.592-4.93c.279-.498 4.063-6.495 4.063-6.495Z"
      fill="#FEB546"
    />
    <path
      d="M127.26 87.06s5.391 20.194 7.553 22.07c1.385 1.201 24.462 19.239 24.566 19.11.105-.129 2.798-3.275 2.798-3.275s-20.601-18.896-21.226-20.56c-.623-1.662-2.92-19.27-2.92-19.27L127.26 87.06ZM124.785 44.454s11.82.801 14.29 1.549c0 0 .052 2.378-.499 2.857-.551.48-6.092 2.577-7.827 2.716-1.735.14-2.996 1.421-4.309-.528-1.314-1.948-1.655-2.428-1.655-2.936v-3.658Z"
      fill="#FFC0BB"
    />
    <path
      d="m157.264 131.621-.234-5.505 4.046-2.342.186 1.726-1.763 4.627s-1.131 1.553-1.221 1.6c-.088.045-1.014-.106-1.014-.106ZM121.634 93.29l6.53 40.193s3.732 4.551 3.904 2.286c.04-.527-.008-4.326.048-5.018.466-5.807 1.025-17.261.64-21.286-.416-4.355-1.883-11.722-1.883-11.722l-9.239-4.453Z"
      fill="#FFC0BB"
    />
    <path
      d="m157.264 131.621.086 1.411c.034.65.883.852 1.198.285l4.356-7.835a.58.58 0 0 0-.214-.783l-1.614-.927c-1.266 6.158-2.765 7.675-3.812 7.849Z"
      fill="#07085B"
    />
    <path
      d="M122.788 44.752s-2.732 11.751 0 20.863c0 0-3.258 4.842-3.258 10.501 0 5.66 3.258 27.551 3.258 27.551s9.352-.534 14.185-2.349V87.329l2.207 12.708 2.206-.962s3.047-20.787-4.833-32.23c0 0 2.837-7.227 3.047-7.974 0 0-.42-7.369 1.471-11.426 0 0-2.154-1.442-1.997-1.442.158 0-1.891 3.31-6.671 3.15-4.782-.16-7.618-4.699-7.618-4.699l-1.997.298Z"
      fill="#FEB546"
    />
    <path
      d="m123.801 135.812 4.494-2.682 3.779 2.437-1.359.938-4.658.563s-1.808-.277-1.887-.333c-.078-.056-.369-.923-.369-.923Z"
      fill="#FFC0BB"
    />
    <path
      d="m123.8 135.812-1.139.71c-.528.322-.316 1.145.301 1.162l8.508.23c.3.008.549-.233.557-.537l.047-1.809c-5.714 1.679-7.656 1.068-8.274.244Z"
      fill="#07085B"
    />
    <path
      opacity={0.3}
      d="M130.248 65.117c-8.826-3.096-5.463-20.662-5.463-20.662l-1.997.298s-2.732 11.75 0 20.863c0 0-3.258 4.842-3.258 10.501 0 5.66 3.258 27.551 3.258 27.551s9.352-.534 14.184-2.349c-12.502.532-6.724-36.202-6.724-36.202Z"
      fill="#FEB546"
    />
    <path d="M140.951 104.406s8.356 6.917 17.278 16.913l-14.265-9.225-3.013-7.688Z" fill="#FFC0BB" />
    <path
      d="M97.658 79.272c1.033-4.035 3.4-6.903 5.288-6.407 1.888.497 2.581 4.172 1.548 8.207-.143.557.234.58.359.094 1.14-4.459.375-8.518-1.711-9.067-2.086-.549-4.702 2.62-5.844 7.079-.129.51.218.65.36.094Z"
      fill="#F46C0F"
    />
    <path d="m108.772 99.725-4.285 3.171-12.108-24.225 1.865-3.127 16.382 4.388-1.854 19.793Z" fill="#D65F0D" />
    <path d="m104.488 102.897-18.875-4.97 6.74-21.583 16.598 4.37-4.463 22.183Z" fill="#F46C0F" />
    <path d="m110.626 79.932-16.382-4.388.931.804-2.822-.004 16.598 4.37.448-.56 1.227-.222Z" fill="#C7580D" />
    <path
      d="M96.465 79.472c1.117-4.362 3.676-7.463 5.716-6.925 2.041.537 2.79 4.508 1.674 8.87-.154.602.254.628.388.102 1.233-4.82.406-9.208-1.849-9.802-2.256-.594-5.083 2.832-6.317 7.652-.14.552.234.705.388.103Z"
      fill="#F46C0F"
    />
    <path d="m109.399 80.154-4.052 18.472 3.426 1.1 1.853-19.794-1.227.222Z" fill="#E6E6E6" />
    <path
      d="M96.916 78.114c1.9-3.696 4.841-5.949 6.57-5.032 1.729.916 1.591 4.654-.308 8.349-.263.51.099.62.329.174 2.098-4.083 2.251-8.213.34-9.226-1.91-1.012-5.161 1.477-7.26 5.561-.24.466.066.684.329.174Z"
      fill="#FF5B7E"
    />
    <path d="m103.218 100.585-4.877 2.11-6.437-26.374 2.51-2.62 14.991 8.022-6.187 18.862Z" fill="#E8486A" />
    <path d="m98.34 102.695-17.29-9.158 11.344-19.49 15.205 8.054-9.258 20.594Z" fill="#FF5B7E" />
    <path d="m109.405 81.723-14.991-8.022.73.996-2.75-.65 15.205 8.054.56-.443 1.246.065Z" fill="#C23C59" />
    <path
      d="M95.708 78.036c2.053-3.995 5.234-6.43 7.103-5.44 1.869.989 1.721 5.03-.333 9.025-.283.551.108.67.356.188 2.268-4.414 2.433-8.88.367-9.973-2.065-1.094-5.579 1.596-7.848 6.011-.26.505.072.74.355.189Z"
      fill="#FF5B7E"
    />
    <path d="m108.16 81.658-8.036 17.072 3.095 1.855 6.186-18.862-1.245-.065Z" fill="#E6E6E6" />
    <path
      d="M97.734 74.946c1.92-2.012 4.24-2.89 5.182-1.964.942.928.148 3.31-1.771 5.321-.266.278-.053.419.178.176 2.122-2.222 2.999-4.855 1.958-5.879-1.04-1.024-3.605-.053-5.726 2.17-.243.255-.087.454.179.176Z"
      fill="#FEB546"
    />
    <path d="m97.561 90.655-3.54.41.821-18.25 2.111-1.2 8.149 8.09-7.54 10.95Z" fill="#EBA741" />
    <path d="m94.02 91.066-9.417-9.269 10.983-10.35 8.282 8.149-9.847 11.47Z" fill="#FEB546" />
    <path d="m105.102 79.705-8.149-8.09.283.785-1.65-.954 8.282 8.15.444-.176.79.285Z" fill="#B88233" />
    <path
      d="M96.97 74.66c2.077-2.174 4.585-3.124 5.603-2.122 1.018 1.002.161 3.577-1.915 5.752-.287.3-.057.453.194.19 2.294-2.403 3.241-5.248 2.116-6.356-1.126-1.107-3.897-.057-6.191 2.347-.262.275-.093.49.194.19Z"
      fill="#FEB546"
    />
    <path d="m104.312 79.42-8.395 9.437 1.644 1.798 7.541-10.95-.79-.285Z" fill="#E6E6E6" />
    <path
      d="M163.051 81.139c-1.147-4.457-3.767-7.623-5.852-7.071-2.085.552-2.846 4.613-1.699 9.07.125.486.502.462.359-.096-1.038-4.033-.349-7.708 1.537-8.208 1.887-.499 4.259 2.366 5.296 6.4.143.557.489.415.359-.095Z"
      fill="#02CCC0"
    />
    <path d="m151.602 101.702 4.289 3.166 12.08-24.24-1.869-3.125-16.376 4.409 1.876 19.79Z" fill="#00B0A5" />
    <path d="m155.891 104.868 18.869-4.993-6.766-21.575-16.592 4.39 4.489 22.178Z" fill="#02CCC0" />
    <path d="m149.726 81.912 16.376-4.41-.931.806 2.823-.008-16.592 4.39-.449-.559-1.227-.22Z" fill="#008C83" />
    <path
      d="M164.272 81.33c-1.239-4.818-4.072-8.24-6.326-7.644-2.255.596-3.076 4.986-1.837 9.804.135.527.543.5.388-.102-1.122-4.361-.378-8.334 1.663-8.873 2.04-.54 4.603 2.557 5.725 6.917.155.603.529.449.387-.102Z"
      fill="#02CCC0"
    />
    <path d="m150.953 82.131 4.074 18.467-3.425 1.104-1.876-19.79 1.227.22Z" fill="#E6E6E6" />
    <path
      d="M163.761 79.901c-2.103-4.08-5.357-6.565-7.266-5.551-1.91 1.015-1.753 5.145.351 9.225.229.445.591.335.328-.175-1.904-3.692-2.046-7.43-.318-8.349 1.728-.919 4.672 1.332 6.576 5.024.264.511.57.293.329-.174Z"
      fill="#07085B"
    />
    <path d="m157.158 102.555 4.88 2.104 6.404-26.382-2.513-2.618-14.98 8.042 6.209 18.854Z" fill="#06074A" />
    <path d="m162.038 104.658 17.279-9.18-11.368-19.474-15.195 8.073 9.284 20.581Z" fill="#07085B" />
    <path d="m150.949 83.701 14.98-8.042-.728.998 2.748-.653-15.194 8.073-.562-.443-1.244.067Z" fill="#040536" />
    <path
      d="M164.995 79.808c-2.274-4.411-5.792-7.098-7.856-6.001-2.065 1.096-1.894 5.561.38 9.973.249.481.64.362.356-.19-2.058-3.991-2.213-8.032-.344-9.025 1.868-.992 5.051 1.44 7.109 5.431.284.551.615.316.355-.188Z"
      fill="#07085B"
    />
    <path d="m152.193 83.633 8.058 17.063-3.093 1.858-6.209-18.853 1.244-.068Z" fill="#E6E6E6" />
    <path
      d="M162.791 76.734c-2.125-2.22-4.69-3.189-5.73-2.163-1.039 1.026-.16 3.657 1.966 5.877.232.242.444.1.179-.176-1.923-2.01-2.72-4.39-1.778-5.319.94-.928 3.261-.052 5.184 1.957.265.278.421.077.179-.176Z"
      fill="#FF5B7E"
    />
    <path d="m162.803 92.618 3.541.405-.844-18.249-2.112-1.196-8.138 8.098 7.553 10.942Z" fill="#E8486A" />
    <path d="m166.344 93.024 9.406-9.28-10.995-10.337-8.272 8.16 9.861 11.457Z" fill="#FF5B7E" />
    <path d="m155.25 81.677 8.138-8.099-.281.784 1.648-.955-8.272 8.16-.445-.176-.788.286Z" fill="#C23C59" />
    <path
      d="M163.567 76.432c-2.296-2.4-5.069-3.447-6.194-2.337-1.123 1.109-.172 3.953 2.125 6.353.251.262.48.11.193-.19-2.079-2.172-2.94-4.747-1.923-5.75 1.018-1.003 3.527-.056 5.605 2.117.288.298.457.082.194-.193Z"
      fill="#FF5B7E"
    />
    <path d="m156.038 81.391 8.408 9.427-1.643 1.8-7.553-10.941.788-.286Z" fill="#E6E6E6" />
    <path
      d="M100.749 72.623c.434-.293 2.063-.415 2.287-.076.272.411.091 2.127-.448 2.347-.485.155-2.426-1.875-1.839-2.271ZM159.124 74.355c-.428-.303-2.055-.459-2.286-.125-.281.405-.136 2.125.399 2.356.482.166 2.465-1.822 1.887-2.23Z"
      fill="#FFC0BB"
    />
  </svg>
)

const PersonalIllustartion = memo(SvgComponent)
export default PersonalIllustartion
