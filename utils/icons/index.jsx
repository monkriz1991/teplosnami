export const Plus = defineComponent({
  name: "Plus",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="#F43F5E"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const ArrowLeft = defineComponent({
  name: "ArrowLeft",
  setup() {
    return () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pagination-panel__arrow-icon"
      >
        <path
          d="M12.6666 7.99992H3.33331M3.33331 7.99992L7.99998 12.6666M3.33331 7.99992L7.99998 3.33325"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const ArrowRight = defineComponent({
  name: "ArrowRight",
  setup() {
    return () => (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="pagination-panel__arrow-icon"
      >
        <path
          d="M3.33331 7.99992H12.6666M12.6666 7.99992L7.99998 3.33325M12.6666 7.99992L7.99998 12.6666"
          stroke="currentColor"
          stroke-width="1.6"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});
export const ArrowBottom = defineComponent({
  name: "ArrowBottom",
  setup() {
    return () => (
      <svg
        width="16"
        height="17"
        viewBox="0 0 16 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6.5L8 10.5L12 6.5"
          stroke="#BE123C"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const QuestionCircle = defineComponent({
  name: "QuestionCircle",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="form-cabinet__tooltip-icon"
      >
        <path
          d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const Logout = defineComponent({
  name: "Logout",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="sidebar-panel__item-icon"
      >
        <path
          d="M16 17L21 12M21 12L16 7M21 12H9M9 3H7.8C6.11984 3 5.27976 3 4.63803 3.32698C4.07354 3.6146 3.6146 4.07354 3.32698 4.63803C3 5.27976 3 6.11984 3 7.8V16.2C3 17.8802 3 18.7202 3.32698 19.362C3.6146 19.9265 4.07354 20.3854 4.63803 20.673C5.27976 21 6.11984 21 7.8 21H9"
          stroke="#DA1212"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const MenuHome = defineComponent({
  name: "MenuHome",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M15 18H9m12.636-5.042l-.279 1.937c-.487 3.388-.731 5.081-1.906 6.093S16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012s-1.419-2.705-1.906-6.093l-.279-1.937c-.38-2.637-.57-3.956-.029-5.083s1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2s2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183"
        />
      </svg>
    );
  },
});

export const MenuReport = defineComponent({
  name: "MenuReport",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            d="M3 13v-2c0-3.75 0-5.625.955-6.939A5 5 0 0 1 5.06 2.955C6.375 2 8.251 2 12 2s5.625 0 6.939.955a5 5 0 0 1 1.106 1.106C21 5.375 21 7.251 21 11v2c0 3.75 0 5.625-.955 6.939a5 5 0 0 1-1.106 1.106C17.625 22 15.749 22 12 22s-5.625 0-6.939-.955a5 5 0 0 1-1.106-1.106c-.531-.731-.767-1.635-.871-2.939"
          />
          <path
            stroke-linecap="round"
            d="M15 7a2 2 0 1 1 0 4H9a2 2 0 1 1 0-4h2"
          />
          <path d="M21 9h-3.5M7 9H3" />
        </g>
      </svg>
    );
  },
});

export const MenuAnalytics = defineComponent({
  name: "MenuAnalytics",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 22h18" />
          <path
            stroke-linecap="round"
            d="M3 17c0 .943 0 1.414.293 1.707S4.057 19 5 19s1.414 0 1.707-.293S7 17.943 7 17v-6c0-.943 0-1.414-.293-1.707S5.943 9 5 9s-1.414 0-1.707.293S3 10.057 3 11v2"
          />
          <path d="M10 7c0-.943 0-1.414.293-1.707S11.057 5 12 5s1.414 0 1.707.293S14 6.057 14 7v10c0 .943 0 1.414-.293 1.707S12.943 19 12 19s-1.414 0-1.707-.293S10 17.943 10 17z" />
          <path
            stroke-linecap="round"
            d="M21 11v6c0 .943 0 1.414-.293 1.707S19.943 19 19 19s-1.414 0-1.707-.293S17 17.943 17 17V4c0-.943 0-1.414.293-1.707S18.057 2 19 2s1.414 0 1.707.293S21 3.057 21 4v3"
          />
        </g>
      </svg>
    );
  },
});

export const MenuMessages = defineComponent({
  name: "MenuMessages",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none">
          <path
            fill="currentColor"
            d="m10.87 21.51l.645.382zm.259-.438l-.646-.382zm-2.258 0l.646-.382zm.26.438l-.646.382zM1.25 12.8a.75.75 0 0 0 1.5 0zm1.747 4.044a.75.75 0 0 0-1.385.574zm3.292 2.741l.024-.75zm-1.82-.29l-.287.693zm13.226-2.164l.693.287zm-3.984 2.454l-.024-.75zm1.82-.29l.287.693zM3.91 6.59l-.392-.639zM2.59 7.91l-.64-.392zm5.326 11.912l-.381.646zm6.932-12.908a.75.75 0 1 0 .304-1.47zm3.707 1.934a.75.75 0 1 0-1.469.304zm-7.04 13.044l.26-.438l-1.292-.764l-.26.438zm-3.29-.438l.26.438l1.291-.764l-.26-.438zm1.999-.326a.25.25 0 0 1-.224.122a.25.25 0 0 1-.224-.122l-1.29.764c.676 1.144 2.352 1.144 3.029 0zM8.8 6.75h2.4v-1.5H8.8zm8.45 6.05v.8h1.5v-.8zM6.313 18.835c-.792-.025-1.223-.094-1.557-.232l-.574 1.385c.597.248 1.255.32 2.083.347zm-4.701-1.417a4.75 4.75 0 0 0 2.57 2.57l.574-1.385a3.25 3.25 0 0 1-1.759-1.76zM17.25 13.6c0 .942 0 1.611-.036 2.138c-.036.52-.103.845-.211 1.106l1.385.574c.197-.474.281-.982.322-1.578c.04-.59.04-1.318.04-2.24zm-3.515 6.735c.828-.027 1.486-.1 2.083-.347l-.574-1.385c-.335.138-.765.207-1.557.232zm3.268-3.491a3.25 3.25 0 0 1-1.76 1.759l.575 1.385a4.75 4.75 0 0 0 2.57-2.57zM8.8 5.25c-1.295 0-2.319 0-3.137.077c-.83.079-1.526.244-2.145.623l.784 1.279c.343-.21.783-.34 1.503-.409c.73-.07 1.671-.07 2.995-.07zM2.75 12.8c0-1.324 0-2.264.07-2.995c.069-.72.199-1.16.409-1.503L1.95 7.518c-.38.619-.544 1.315-.623 2.145c-.078.818-.077 1.842-.077 3.137zm.768-6.85A4.75 4.75 0 0 0 1.95 7.518l1.279.784a3.25 3.25 0 0 1 1.073-1.073zm5.999 14.74c-.201-.34-.377-.638-.548-.874a2.2 2.2 0 0 0-.67-.64l-.764 1.292c.046.027.11.077.22.23c.12.165.256.393.47.756zm-3.252-.355c.446.014.73.024.947.05c.204.025.281.058.323.083l.763-1.291c-.29-.171-.594-.243-.905-.28c-.298-.037-.661-.048-1.08-.062zm5.51 1.119c.214-.363.35-.591.47-.756c.11-.153.174-.203.22-.23l-.763-1.291a2.2 2.2 0 0 0-.67.64c-.172.235-.348.534-.549.873zm1.912-2.619c-.419.014-.782.025-1.08.061c-.31.038-.616.11-.905.28l.763 1.292c.042-.025.119-.058.323-.083c.216-.026.501-.036.947-.05zM11.2 6.75c1.798 0 2.873.004 3.648.164l.304-1.47c-.963-.198-2.227-.194-3.952-.194zm7.55 6.05c0-1.725.004-2.989-.195-3.952l-1.469.304c.16.775.164 1.85.164 3.648z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M7.033 6c.052-.992.183-1.661.52-2.21A3.75 3.75 0 0 1 8.79 2.554C9.692 2 10.92 2 13.375 2h2.25c1.528 0 2.58 0 3.375.133m-1 12.602c.748-.025 1.253-.091 1.685-.27a3.75 3.75 0 0 0 2.03-2.03c.285-.689.285-1.563.285-3.31v-.75c0-1.528 0-2.58-.133-3.375"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6.51 13h.008M10 13h.009m3.482 0h.009"
          />
        </g>
      </svg>
    );
  },
});

export const MenuSettings = defineComponent({
  name: "MenuSettings",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="3" />
          <path
            stroke-linecap="round"
            d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 0 0-.396 1.479c.052.394.285.798.75 1.605c.467.807.7 1.21 1.015 1.453a2 2 0 0 0 1.479.396c.24-.032.483-.13.819-.308a1.62 1.62 0 0 1 1.567.008c.483.28.77.795.79 1.353c.014.38.05.64.143.863a2 2 0 0 0 1.083 1.083C10.602 22 11.068 22 12 22s1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083c.092-.223.129-.483.143-.863c.02-.558.307-1.074.79-1.353a1.62 1.62 0 0 1 1.567-.008c.336.178.58.276.82.308a2 2 0 0 0 1.478-.396c.315-.242.548-.646 1.014-1.453c.208-.36.369-.639.489-.873m-.81-2.766a1.62 1.62 0 0 1-.777-1.36c0-.559.304-1.065.777-1.362c.321-.202.528-.363.676-.555a2 2 0 0 0 .396-1.479c-.052-.394-.285-.798-.75-1.605c-.467-.807-.7-1.21-1.015-1.453a2 2 0 0 0-1.479-.396c-.24.032-.483.13-.82.308a1.62 1.62 0 0 1-1.566-.008a1.62 1.62 0 0 1-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 0 0-1.083-1.083C13.398 2 12.932 2 12 2s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083c-.092.223-.129.483-.143.863a1.62 1.62 0 0 1-.79 1.353a1.62 1.62 0 0 1-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 0 0-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"
          />
        </g>
      </svg>
    );
  },
});

export const MenuUsers = defineComponent({
  name: "MenuUsers",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="6" r="4" />
          <path
            stroke-linecap="round"
            d="M18 9c1.657 0 3-1.12 3-2.5S19.657 4 18 4M6 9C4.343 9 3 7.88 3 6.5S4.343 4 6 4m11.197 11c.51.588.803 1.271.803 2c0 2.21-2.686 4-6 4s-6-1.79-6-4s2.686-4 6-4q.511 0 1 .055M20 19c1.754-.385 3-1.359 3-2.5s-1.246-2.115-3-2.5M4 19c-1.754-.385-3-1.359-3-2.5s1.246-2.115 3-2.5"
          />
        </g>
      </svg>
    );
  },
});

export const MenuFavorites = defineComponent({
  name: "MenuFavorites",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="currentColor"
          d="m12 5.5l-.54.52l.01.011zM8.962 18.91l-.465.59zm6.076 0l-.464-.588zm-8.037-2.49a.75.75 0 0 0-.954 1.16zm-4.659-3.009a.75.75 0 1 0 1.316-.72zm11.128-5.38a.75.75 0 1 0 1.06-1.062zM2.75 9.136c0-2.15 1.215-3.954 2.874-4.713c1.612-.737 3.778-.541 5.836 1.597l1.08-1.04C10.1 2.444 7.264 2.025 5 3.06C2.786 4.073 1.25 6.425 1.25 9.137zM8.497 19.5c.513.404 1.063.834 1.62 1.16s1.193.59 1.883.59v-1.5c-.31 0-.674-.12-1.126-.385c-.453-.264-.922-.628-1.448-1.043zm7.006 0c1.426-1.125 3.25-2.413 4.68-4.024c1.457-1.64 2.567-3.673 2.567-6.339h-1.5c0 2.198-.9 3.891-2.188 5.343c-1.315 1.48-2.972 2.647-4.488 3.842zM22.75 9.137c0-2.712-1.535-5.064-3.75-6.077c-2.264-1.035-5.098-.616-7.54 1.92l1.08 1.04c2.058-2.137 4.224-2.333 5.836-1.596c1.659.759 2.874 2.562 2.874 4.713zm-8.176 9.185c-.526.415-.995.779-1.448 1.043s-.816.385-1.126.385v1.5c.69 0 1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16zm-5.148 0c-.796-.627-1.605-1.226-2.425-1.901l-.954 1.158c.83.683 1.708 1.335 2.45 1.92zm-5.768-5.63a7.25 7.25 0 0 1-.908-3.555h-1.5c0 1.638.42 3.046 1.092 4.275zm7.812-6.66l2 1.998l1.06-1.06l-2-2z"
        />
      </svg>
    );
  },
});

export const MenuTemplates = defineComponent({
  name: "MenuTemplates",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="M20.998 10c-.012-2.175-.108-3.353-.877-4.121C19.243 5 17.828 5 15 5h-3c-2.828 0-4.243 0-5.121.879C6 6.757 6 8.172 6 11v5c0 2.828 0 4.243.879 5.121C7.757 22 9.172 22 12 22h3c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16v-1" />
          <path d="M3 10v6a3 3 0 0 0 3 3M18 5a3 3 0 0 0-3-3h-4C7.229 2 5.343 2 4.172 3.172C3.518 3.825 3.229 4.7 3.102 6" />
        </g>
      </svg>
    );
  },
});

export const MenuBook = defineComponent({
  name: "MenuBook",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M19.898 16h-12c-.93 0-1.395 0-1.777.102A3 3 0 0 0 4 18.224" />
          <path
            stroke-linecap="round"
            d="M8 7h8m-8 3.5h5m6.5 8.5H8m2 3c-2.828 0-4.243 0-5.121-.879C4 20.243 4 18.828 4 16V8c0-2.828 0-4.243.879-5.121C5.757 2 7.172 2 10 2h4c2.828 0 4.243 0 5.121.879C20 3.757 20 5.172 20 8m-6 14c2.828 0 4.243 0 5.121-.879C20 20.243 20 18.828 20 16v-4"
          />
        </g>
      </svg>
    );
  },
});

export const MenuPlans = defineComponent({
  name: "MenuPlans",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" d="M18 10h-5" />
          <path d="M10 3h6.5c.464 0 .697 0 .892.026a3 3 0 0 1 2.582 2.582c.026.195.026.428.026.892" />
          <path
            stroke-linecap="round"
            d="M22 11.798c0-2.632 0-3.949-.77-4.804a3 3 0 0 0-.224-.225C20.151 6 18.834 6 16.202 6h-.374c-1.153 0-1.73 0-2.268-.153a4 4 0 0 1-.848-.352C12.224 5.224 11.816 4.815 11 4l-.55-.55c-.274-.274-.41-.41-.554-.53a4 4 0 0 0-2.18-.903C7.53 2 7.336 2 6.95 2c-.883 0-1.324 0-1.692.07A4 4 0 0 0 2.07 5.257C2 5.626 2 6.068 2 6.95M21.991 16c-.036 2.48-.22 3.885-1.163 4.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172S2 17.771 2 14v-3"
          />
        </g>
      </svg>
    );
  },
});

export const MenuInception = defineComponent({
  name: "MenuInception",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            d="M16.5 7.5h-3M22 20h-8M2 20h8m2-2v-3"
          />
          <circle cx="12" cy="20" r="2" />
          <path
            stroke-linecap="round"
            d="M5 5.217c0-.573 0-.86.049-1.099c.213-1.052 1.1-1.874 2.232-2.073C7.538 2 7.847 2 8.465 2c.27 0 .406 0 .536.011c.56.049 1.093.254 1.526.587c.1.078.196.167.388.344l.385.358c.571.53.857.795 1.198.972q.284.146.594.228c.377.1.78.1 1.588.1h.261c1.843 0 2.765 0 3.363.5q.083.07.157.146c.439.453.52 1.104.536 2.254m-.003 3.6c-.025 1.612-.154 2.526-.814 3.139c-.82.761-2.14.761-4.78.761h-2.8c-2.64 0-3.96 0-4.78-.761C5 13.477 5 12.25 5 9.8V8.5"
          />
        </g>
      </svg>
    );
  },
});

export const MenuContracts = defineComponent({
  name: "MenuContracts",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="m18.18 8.04l.463-.464a1.966 1.966 0 1 1 2.781 2.78l-.463.464M18.18 8.04s.058.984.927 1.853s1.854.927 1.854.927M18.18 8.04l-4.26 4.26c-.29.288-.434.433-.558.592q-.22.282-.374.606c-.087.182-.151.375-.28.762l-.413 1.24l-.134.401m8.8-5.081l-4.26 4.26c-.29.29-.434.434-.593.558q-.282.22-.606.374c-.182.087-.375.151-.762.28l-1.24.413l-.401.134m0 0l-.401.134a.53.53 0 0 1-.67-.67l.133-.402m.938.938l-.938-.938" />
          <path
            stroke-linecap="round"
            d="M8 13h2.5M8 9h6.5M8 17h1.5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172M21 14c0 3.771 0 5.657-1.172 6.828m-15.656 0C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172m0 0c.944-.943 1.127-2.348 1.163-4.828"
          />
        </g>
      </svg>
    );
  },
});

export const MenuReferences = defineComponent({
  name: "MenuReferences",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="m11.777 10l4.83 1.294M11 12.898l2.898.776m6.414-1.027c-.605 2.255-.907 3.383-1.592 4.114a4 4 0 0 1-2.01 1.161q-.145.034-.295.052c-.915.113-2.032-.186-4.064-.73c-2.255-.605-3.383-.907-4.114-1.592a4 4 0 0 1-1.161-2.011c-.228-.976.074-2.103.679-4.358l.517-1.932l.244-.905c.455-1.666.761-2.583 1.348-3.21a4 4 0 0 1 2.01-1.16c.976-.228 2.104.074 4.36.679c2.254.604 3.382.906 4.113 1.59a4 4 0 0 1 1.161 2.012c.161.69.057 1.456-.231 2.643" />
          <path
            stroke-linejoin="round"
            d="M3.272 16.647c.604 2.255.907 3.383 1.592 4.114a4 4 0 0 0 2.01 1.161c.976.227 2.104-.075 4.36-.679c2.254-.604 3.382-.906 4.113-1.591a4 4 0 0 0 1.068-1.678M8.516 6.445q-.527.137-1.165.31c-2.255.604-3.383.906-4.114 1.59a4 4 0 0 0-1.161 2.012c-.161.69-.057 1.456.231 2.643"
          />
        </g>
      </svg>
    );
  },
});

export const MenuDirectory = defineComponent({
  name: "MenuDirectory",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M21 16c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22H9c-2.828 0-4.243 0-5.121-.879C3 20.243 3 18.828 3 16V8c0-2.828 0-4.243.879-5.121C4.757 2 6.172 2 9 2h6c2.828 0 4.243 0 5.121.879C21 3.757 21 5.172 21 8v4M8 2v4m0 16V10m-6 2h2m-2 4h2M2 8h2m7.5-1.5h5m-5 3.5h5"
        />
      </svg>
    );
  },
});

export const MenuNTDProjects = defineComponent({
  name: "MenuNTDProjects",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M8 12h1m7 0h-4m4-4h-1m-3 0H8m0 8h5M3 14v-4c0-3.771 0-5.657 1.172-6.828S7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172c.654.653.943 1.528 1.07 2.828M21 10v4c0 3.771 0 5.657-1.172 6.828S16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172c-.654-.653-.943-1.528-1.07-2.828"
        />
      </svg>
    );
  },
});

export const MenuNotification = defineComponent({
  name: "MenuNotification",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M9.107 2.674A6.5 6.5 0 0 1 12 2c3.727 0 6.75 3.136 6.75 7.005v.705a4.4 4.4 0 0 0 .692 2.375l1.108 1.724c1.011 1.575.239 3.716-1.52 4.214a25.8 25.8 0 0 1-14.06 0c-1.759-.498-2.531-2.639-1.52-4.213l1.108-1.725A4.4 4.4 0 0 0 5.25 9.71v-.705c0-1.074.233-2.092.65-3.002M7.5 19c.655 1.748 2.422 3 4.5 3q.367 0 .72-.05M16.5 19a4.5 4.5 0 0 1-1.302 1.84"
        />
      </svg>
    );
  },
});

export const MenuRIDObjects = defineComponent({
  name: "MenuRIDObjects",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="19" cy="5" r="3" />
          <path
            stroke-linecap="round"
            d="M7 14h9m-9 3.5h6M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536"
          />
        </g>
      </svg>
    );
  },
});

export const MenuInstructions = defineComponent({
  name: "MenuInstructions",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path stroke-linejoin="round" d="M8 17h8M8 7v3a4 4 0 0 0 8 0V7" />
          <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" />
        </g>
      </svg>
    );
  },
});

export const MenuApplicationsPlan = defineComponent({
  name: "MenuApplicationsPlan",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            d="M7 12H6c-1.886 0-2.828 0-3.414.586c-.472.471-.564 1.174-.582 2.414M12 17v1c0 1.886 0 2.828-.586 3.414C10.83 22 9.886 22 8 22H6c-1.886 0-2.828 0-3.414-.586c-.472-.471-.564-1.174-.582-2.414"
          />
          <path d="M12 7h-1c-1.886 0-2.828 0-3.414.586S7 9.114 7 11v2c0 1.886 0 2.828.586 3.414S9.114 17 11 17h2c1.886 0 2.828 0 3.414-.586S17 14.886 17 13v-1" />
          <path
            stroke-linecap="round"
            d="M15 2.004c-1.24.018-1.943.11-2.414.582C12 3.172 12 4.114 12 6v2c0 1.886 0 2.829.586 3.414C13.172 12 14.114 12 16 12h2c1.886 0 2.828 0 3.414-.586C22 10.83 22 9.886 22 8V6c0-1.886 0-2.828-.586-3.414c-.471-.472-1.174-.564-2.414-.582"
          />
        </g>
      </svg>
    );
  },
});

export const MenuTerms = defineComponent({
  name: "MenuTerms",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M4 6v13a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5M4 6V5m0 1h13a3 3 0 0 1 3 3v1"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M9 13a3 3 0 1 1 3 3"
          />
          <path
            fill="currentColor"
            d="M18 6v.75h.75V6zm-2.283-3.674l-.106-.742zM4.92 3.87l-.106-.743zm.15 2.88H18v-1.5H5.071zM18.75 6V4.306h-1.5V6zm-3.139-4.416L4.814 3.126l.212 1.485L15.823 3.07zM4.814 3.126A1.82 1.82 0 0 0 3.25 4.93h1.5a.32.32 0 0 1 .276-.318zm13.936 1.18a2.75 2.75 0 0 0-3.139-2.722l.212 1.485a1.25 1.25 0 0 1 1.427 1.237zM5.071 5.25a.32.32 0 0 1-.321-.321h-1.5A1.82 1.82 0 0 0 5.071 6.75z"
          />
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M10 19h4"
          />
        </g>
      </svg>
    );
  },
});

export const MenuPatents = defineComponent({
  name: "MenuPatents",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            d="M7 17.998c-2.175-.012-3.353-.108-4.121-.877C2 16.243 2 14.828 2 12V8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h8c2.828 0 4.243 0 5.121.879c.49.49.707 1.146.803 2.121M16.5 17.998l.82-.002c1.972-.021 3.072-.145 3.801-.875C22 16.243 22 14.828 22 12V9M9 6h6M7 9.5h2m8 0h-4.5"
          />
          <path d="M10.89 13.945a1.71 1.71 0 0 1 2.22 0c.273.234.614.375.973.404a1.71 1.71 0 0 1 1.569 1.568c.028.36.17.7.403.974a1.71 1.71 0 0 1 0 2.218a1.7 1.7 0 0 0-.403.974a1.71 1.71 0 0 1-1.57 1.569a1.7 1.7 0 0 0-.973.403a1.71 1.71 0 0 1-2.218 0a1.7 1.7 0 0 0-.974-.404a1.71 1.71 0 0 1-1.568-1.568a1.7 1.7 0 0 0-.404-.974a1.71 1.71 0 0 1 0-2.218a1.7 1.7 0 0 0 .404-.974a1.71 1.71 0 0 1 1.568-1.568c.36-.029.7-.17.974-.404Z" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m10.5 18.2l.857.8l2.143-2"
          />
        </g>
      </svg>
    );
  },
});

export const MenuAdministrativePanel = defineComponent({
  name: "MenuAdministrativePanel",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path
            stroke-linecap="round"
            d="M2.5 13v4.5c0 1.886 0 2.828.586 3.414s1.528.586 3.414.586s2.828 0 3.414-.586s.586-1.528.586-3.414v-11c0-1.886 0-2.828-.586-3.414S8.386 2.5 6.5 2.5s-2.828 0-3.414.586S2.5 4.614 2.5 6.5V9m19 9c-.005 1.557-.054 2.383-.586 2.914c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586s-.586-1.528-.586-3.414v-2c0-1.886 0-2.828.586-3.414s1.528-.586 3.414-.586s2.828 0 3.414.586c.404.404.53.978.569 1.914"
          />
          <path d="M13.5 5.5c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083c.367-.152.833-.152 1.765-.152h2c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083c.152.367.152.833.152 1.765s0 1.398-.152 1.765a2 2 0 0 1-1.083 1.083c-.367.152-.833.152-1.765.152h-2c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C13.5 6.898 13.5 6.432 13.5 5.5Z" />
        </g>
      </svg>
    );
  },
});

export const MenuCompetitions = defineComponent({
  name: "MenuCompetitions",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
        class="sidebar-panel__item-icon"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M7 18V9m5 9V6m5 12v-5m5-1c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
        />
      </svg>
    );
  },
});

export const MenuDots = defineComponent({
  name: "MenuDots",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M9 4.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m1.5 7.5a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m0 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0m6-6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0M15 16.5a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3M16.5 6a1.5 1.5 0 1 0-3 0a1.5 1.5 0 0 0 3 0"
          />
        </g>
      </svg>
    );
  },
});

export const Close = defineComponent({
  name: "Close",
  setup() {
    return () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M18 6L6 18M6 6L18 18"
          stroke="#333"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});
export const HeaderXLS = defineComponent({
  name: "HeaderXLS",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          color="currentColor"
        >
          <path d="m8 13l1.708 2.5m0 0l1.708 2.5m-1.708-2.5l1.708-2.5m-1.708 2.5L8 18m8.562 0h-.854c-.805 0-1.208 0-1.458-.244s-.25-.637-.25-1.423V13m6.728 0h-.949c-.38 0-.569 0-.719.063c-.502.214-.502.71-.502 1.169v.036c0 .458 0 .955.502 1.169c.15.063.34.063.719.063c.38 0 .569 0 .718.063c.503.214.503.71.503 1.169v.036c0 .458 0 .955-.503 1.169c-.15.063-.339.063-.718.063h-1.034" />
          <path d="M15 22h-4.273c-3.26 0-4.892 0-6.024-.798a4.1 4.1 0 0 1-.855-.805C3 19.331 3 17.797 3 14.727v-2.545c0-2.963 0-4.445.469-5.628c.754-1.903 2.348-3.403 4.37-4.113C9.095 2 10.668 2 13.818 2c1.798 0 2.698 0 3.416.252c1.155.406 2.066 1.263 2.497 2.35C20 5.278 20 6.125 20 7.818V10" />
          <path d="M3 12a3.333 3.333 0 0 1 3.333-3.333c.666 0 1.451.116 2.098-.057A1.67 1.67 0 0 0 9.61 7.43c.173-.647.057-1.432.057-2.098A3.333 3.333 0 0 1 13 2" />
        </g>
      </svg>
    );
  },
});

export const SearchArrow = defineComponent({
  name: "SearchArrow",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path stroke-linejoin="round" d="M12 4v10m0 0l3-3m-3 3l-3-3" />
          <path d="M12 20a8 8 0 0 1-8-8m16 0a7.99 7.99 0 0 1-3 6.245" />
        </g>
      </svg>
    );
  },
});

export const EditItem = defineComponent({
  name: "EditItem",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path d="M2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12v-1.5M13.5 2H12C7.286 2 4.929 2 3.464 3.464c-.973.974-1.3 2.343-1.409 4.536" />
          <path d="m16.652 3.455l.649-.649A2.753 2.753 0 0 1 21.194 6.7l-.65.649m-3.892-3.893s.081 1.379 1.298 2.595c1.216 1.217 2.595 1.298 2.595 1.298m-3.893-3.893L10.687 9.42c-.404.404-.606.606-.78.829q-.308.395-.524.848c-.121.255-.211.526-.392 1.068L8.412 13.9m12.133-6.552l-2.983 2.982m-2.982 2.983c-.404.404-.606.606-.829.78a4.6 4.6 0 0 1-.848.524c-.255.121-.526.211-1.068.392l-1.735.579m0 0l-1.123.374a.742.742 0 0 1-.939-.94l.374-1.122m1.688 1.688L8.412 13.9" />
        </g>
      </svg>
    );
  },
});

export const DeleteItem = defineComponent({
  name: "DeleteItem",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <path stroke-linecap="round" d="M20.5 6h-17m6 5l.5 5m4.5-5l-.5 5" />
          <path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" />
          <path
            stroke-linecap="round"
            d="M18.374 15.4c-.177 2.654-.266 3.981-1.131 4.79s-2.195.81-4.856.81h-.774c-2.66 0-3.99 0-4.856-.81c-.865-.809-.953-2.136-1.13-4.79l-.46-6.9m13.666 0l-.2 3"
          />
        </g>
      </svg>
    );
  },
});

export const CancelItem = defineComponent({
  name: "CancelItem",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="m14.5 9.5l-5 5m0-5l5 5M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
        />
      </svg>
    );
  },
});

export const AddlItem = defineComponent({
  name: "AddlItem",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
          d="M15 12h-3m0 0H9m3 0V9m0 3v3m10-3c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536"
        />
      </svg>
    );
  },
});

export const FavoritesItem = defineComponent({
  name: "FavoritesItem",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g fill="none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M18.5 9h-2m0 0h-2m2 0V7m0 2v2"
          />
          <path
            fill="currentColor"
            d="m8.962 19.379l.472-.583zM12 5.574l-.548.512a.75.75 0 0 0 1.096 0zm3.038 13.805l.473.582zM12 21v-.75zm-9.348-7.318a.75.75 0 1 0 1.283-.776zm3.885 2.489a.75.75 0 1 0-1.074 1.046zM2.75 9.318c0-2.905 1.268-4.7 2.836-5.315c1.565-.613 3.754-.175 5.866 2.083l1.096-1.024c-2.388-2.554-5.199-3.36-7.509-2.456C2.732 3.51 1.25 5.992 1.25 9.318zM15.51 19.96c1.493-1.211 3.281-2.834 4.703-4.647c1.407-1.794 2.537-3.879 2.537-5.997h-1.5c0 1.612-.88 3.364-2.218 5.071c-1.324 1.689-3.016 3.232-4.466 4.408zm7.24-10.644c0-3.325-1.482-5.807-3.79-6.71c-2.31-.905-5.12-.1-7.508 2.455l1.096 1.024c2.112-2.258 4.301-2.696 5.866-2.083c1.568.614 2.836 2.41 2.836 5.314zM8.49 19.961c1.27 1.032 2.152 1.789 3.51 1.789v-1.5c-.723 0-1.173-.324-2.566-1.454zm6.076-1.165c-1.393 1.13-1.843 1.454-2.566 1.454v1.5c1.358 0 2.24-.757 3.51-1.789zm-10.63-5.89C3.187 11.67 2.75 10.455 2.75 9.318h-1.5c0 1.512.576 3 1.402 4.364zm5.498 5.89a34 34 0 0 1-2.897-2.625l-1.074 1.046a35 35 0 0 0 3.026 2.744z"
          />
        </g>
      </svg>
    );
  },
});

export const ArrowBack = defineComponent({
  name: "ArrowBack",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path stroke-linejoin="round" d="m13.5 9l-3 3l3 3" />
          <path d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464c.974.974 1.3 2.343 1.41 4.536" />
        </g>
      </svg>
    );
  },
});

export const ArrowBackHero = defineComponent({
  name: "ArrowBackHero",
  setup() {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m15 19l-6-7l1.5-1.75M15 5l-2 2.333"
        />
      </svg>
    );
  },
});

export const DragUpload = defineComponent({
  name: "DragUpload",
  setup() {
    return () => (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hero-form__card-upload-icon"
      >
        <path
          d="M8 16.5L12 12.5M12 12.5L16 16.5M12 12.5V21.5M20 17.2428C21.2215 16.234 22 14.7079 22 13C22 9.96243 19.5376 7.5 16.5 7.5C16.2815 7.5 16.0771 7.386 15.9661 7.19774C14.6621 4.98484 12.2544 3.5 9.5 3.5C5.35786 3.5 2 6.85786 2 11C2 13.0661 2.83545 14.9371 4.18695 16.2935"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const FormSearchMagnifying = defineComponent({
  name: "FormSearchMagnifying",
  setup() {
    return () => (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hero-form__card-upload-icon"
      >
        <g fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="9" />
          <path
            stroke-linecap="round"
            d="M21.812 20.975c-.063.095-.176.208-.403.434c-.226.227-.34.34-.434.403a1.13 1.13 0 0 1-1.62-.408c-.053-.1-.099-.254-.19-.561c-.101-.335-.151-.503-.161-.621a1.13 1.13 0 0 1 1.218-1.218c.118.01.285.06.621.16c.307.092.46.138.56.192a1.13 1.13 0 0 1 .409 1.619Z"
          />
        </g>
      </svg>
    );
  },
});

export const PdfFile = defineComponent({
  name: "PdfFile",
  setup() {
    return () => (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="hero-form__card-upload-icon"
      >
        <path
          fill="#909090"
          d="m24.1 2.072l5.564 5.8v22.056H8.879V30h20.856V7.945z"
        />
        <path fill="#f4f4f4" d="M24.031 2H8.808v27.928h20.856V7.873z" />
        <path fill="#7a7b7c" d="M8.655 3.5h-6.39v6.827h20.1V3.5z" />
        <path fill="#dd2025" d="M22.472 10.211H2.395V3.379h20.077z" />
        <path
          fill="#464648"
          d="M9.052 4.534H7.745v4.8h1.028V7.715L9 7.728a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .335-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.409-.104a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.193a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.671-2.306c-.111 0-.219.008-.295.011L12 4.538h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.392h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.08-3.915H15v4.8h1.028V7.434h1.3v-.892h-1.3V5.43h1.4v-.892"
        />
        <path
          fill="#dd2025"
          d="M21.781 20.255s3.188-.578 3.188.511s-1.975.646-3.188-.511m-2.357.083a7.5 7.5 0 0 0-1.473.489l.4-.9c.4-.9.815-2.127.815-2.127a14 14 0 0 0 1.658 2.252a13 13 0 0 0-1.4.288Zm-1.262-6.5c0-.949.307-1.208.546-1.208s.508.115.517.939a10.8 10.8 0 0 1-.517 2.434a4.4 4.4 0 0 1-.547-2.162Zm-4.649 10.516c-.978-.585 2.051-2.386 2.6-2.444c-.003.001-1.576 3.056-2.6 2.444M25.9 20.895c-.01-.1-.1-1.207-2.07-1.16a14 14 0 0 0-2.453.173a12.5 12.5 0 0 1-2.012-2.655a11.8 11.8 0 0 0 .623-3.1c-.029-1.2-.316-1.888-1.236-1.878s-1.054.815-.933 2.013a9.3 9.3 0 0 0 .665 2.338s-.425 1.323-.987 2.639s-.946 2.006-.946 2.006a9.6 9.6 0 0 0-2.725 1.4c-.824.767-1.159 1.356-.725 1.945c.374.508 1.683.623 2.853-.91a23 23 0 0 0 1.7-2.492s1.784-.489 2.339-.623s1.226-.24 1.226-.24s1.629 1.639 3.2 1.581s1.495-.939 1.485-1.035"
        />
        <path fill="#909090" d="M23.954 2.077V7.95h5.633z" />
        <path fill="#f4f4f4" d="M24.031 2v5.873h5.633z" />
        <path
          fill="#fff"
          d="M8.975 4.457H7.668v4.8H8.7V7.639l.228.013a2 2 0 0 0 .647-.117a1.4 1.4 0 0 0 .493-.291a1.2 1.2 0 0 0 .332-.454a2.1 2.1 0 0 0 .105-.908a2.2 2.2 0 0 0-.114-.644a1.17 1.17 0 0 0-.687-.65a2 2 0 0 0-.411-.105a2 2 0 0 0-.319-.026m-.189 2.294h-.089v-1.48h.194a.57.57 0 0 1 .459.181a.92.92 0 0 1 .183.558c0 .246 0 .469-.222.626a.94.94 0 0 1-.524.114m3.67-2.306c-.111 0-.219.008-.295.011l-.235.006h-.78v4.8h.918a2.7 2.7 0 0 0 1.028-.175a1.7 1.7 0 0 0 .68-.491a1.9 1.9 0 0 0 .373-.749a3.7 3.7 0 0 0 .114-.949a4.4 4.4 0 0 0-.087-1.127a1.8 1.8 0 0 0-.4-.733a1.6 1.6 0 0 0-.535-.4a2.4 2.4 0 0 0-.549-.178a1.3 1.3 0 0 0-.228-.017m-.182 3.937h-.1V5.315h.013a1.06 1.06 0 0 1 .6.107a1.2 1.2 0 0 1 .324.4a1.3 1.3 0 0 1 .142.526c.009.22 0 .4 0 .549a3 3 0 0 1-.033.513a1.8 1.8 0 0 1-.169.5a1.1 1.1 0 0 1-.363.36a.67.67 0 0 1-.416.106m5.077-3.915h-2.43v4.8h1.028V7.357h1.3v-.892h-1.3V5.353h1.4v-.892"
        />
      </svg>
    );
  },
});

export const rotateArrow = defineComponent({
  name: "RotateArrow",
  props: {
    rotated: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class={[
          "hero-form__heading-hide-icon",
          { "rotate-180": props.rotated },
        ]}
      >
        <path
          d="M18 15L12 9L6 15"
          stroke="var(--color-border-icons)"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    );
  },
});

export const Instagram = defineComponent({
  name: "Instagram",
  props: {
    rotated: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
          <path d="M16.5 12a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0m1.008-5.5h-.01" />
        </g>
      </svg>
    );
  },
});

export const Facebook = defineComponent({
  name: "Facebook",
  props: {
    rotated: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="icon"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12" />
          <path d="M16.927 8.026h-2.945a1.9 1.9 0 0 0-1.9 1.886l-.086 11.515m-1.914-7.425h4.803" />
        </g>
      </svg>
    );
  },
});

export const Youtube = defineComponent({
  name: "Youtube",
  props: {
    rotated: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="24"
        viewBox="0 0 256 256"
        class="icon"
      >
        <path
          fill="currentColor"
          d="m163.33 123l-48-32a6 6 0 0 0-9.33 5v64a6 6 0 0 0 9.33 5l48-32a6 6 0 0 0 0-10M118 148.79v-41.58L149.18 128ZM232.4 70a22 22 0 0 0-13.28-15C185 41.79 130.27 42 128 42s-57-.21-91.16 13A22 22 0 0 0 23.6 70c-2.55 9.89-5.6 28-5.6 58s3.05 48.11 5.6 58a22 22 0 0 0 13.28 15C71 214.21 125.72 214 128 214h.71c6.91 0 58-.44 90.45-13a22 22 0 0 0 13.28-15c2.55-9.87 5.6-27.93 5.6-58S235 79.89 232.4 70m-11.62 113a10 10 0 0 1-6 6.86c-32 12.33-86.2 12.14-86.78 12.14s-54.71.2-86.75-12.17a10 10 0 0 1-6-6.86C32.84 173.78 30 156.78 30 128s2.84-45.78 5.22-55a10 10 0 0 1 6-6.86C72.06 54.26 123.53 54 127.76 54h.24c.54 0 54.71-.2 86.75 12.17a10 10 0 0 1 6 6.86c2.38 9.19 5.22 26.19 5.22 55s-2.81 45.75-5.19 54.97"
        />
      </svg>
    );
  },
});

export const Left = defineComponent({
  name: "Left",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path stroke-linejoin="round" d="m13.5 9l-3 3l3 3" />
          <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
        </g>
      </svg>
    );
  },
});
export const Right = defineComponent({
  name: "Right",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="1.5"
        >
          <path stroke-linejoin="round" d="m10.5 9l3 3l-3 3" />
          <path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5" />
        </g>
      </svg>
    );
  },
});

export const Hands = defineComponent({
  name: "Hands",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 20 20"
      >
        <g fill="currentColor">
          <path
            fill-rule="evenodd"
            d="M3.646 2.49a1 1 0 0 0-1.322.502L.161 7.795a1 1 0 0 0 .5 1.322l1.49.671a1 1 0 0 0 1.323-.5l2.163-4.804a1 1 0 0 0-.5-1.322zM1.873 8.418a.681.681 0 1 0 .56-1.242a.681.681 0 0 0-.56 1.242m17.142.83a1 1 0 0 0 .58-1.29L17.73 3.034a1 1 0 0 0-1.29-.581l-1.527.579a1 1 0 0 0-.58 1.29l1.866 4.925a1 1 0 0 0 1.289.581zm-2.937-5.445a.681.681 0 1 0 .483 1.274a.681.681 0 0 0-.483-1.274"
            clip-rule="evenodd"
          />
          <path
            fill-rule="evenodd"
            d="M14.885 4.107h.008a.5.5 0 1 0-.087-.997h-.008l-.026.003l-.097.01l-.353.034c-.297.03-.708.077-1.162.137c-.895.118-2.004.298-2.73.54c-.352.117-.724.344-1.08.604c-.361.264-.735.585-1.093.918A28 28 0 0 0 6.438 7.24c-.419.474-.516 1.23-.024 1.766c.32.346.82.784 1.468.98c.677.203 1.457.124 2.254-.468l.999-.645l.018-.011c.143.087.342.237.58.436c.26.218.542.475.805.722a34 34 0 0 1 .88.86l.055.057l.014.014l.005.005l.059.06l.075.039c.403.2.846.128 1.19.012c.358-.12.714-.324 1.017-.525a9 9 0 0 0 1.075-.849l.018-.016l.005-.005l.001-.001s-.088-.31-.432-.672l-.271.34L16 10l-2.508.957L14 10.5l-.268-.717a34 34 0 0 0-.508-.49c-.27-.254-.568-.525-.85-.76c-.273-.23-.557-.448-.794-.578c-.394-.216-.78-.056-.988.079l-1.028.664l-.014.01c-.555.416-1.011.432-1.38.321c-.4-.12-.755-.412-1.02-.7c-.083-.09-.107-.263.037-.426a27 27 0 0 1 1.751-1.815c.341-.317.683-.61 1.002-.843c.326-.238.6-.393.807-.462c.624-.208 1.645-.379 2.544-.498a41 41 0 0 1 1.478-.167l.093-.009z"
            clip-rule="evenodd"
          />
          <path d="M14.127 10.177a35 35 0 0 0-.395-.394L14 10.5l-.508.457L16 10l.229-.66L16.5 9l-.255-.054l-.003.002l-.014.013l-.054.05a8 8 0 0 1-.895.699c-.27.18-.543.33-.783.41c-.186.063-.302.068-.369.057" />
          <path
            fill-rule="evenodd"
            d="m5.047 5.068l-.197-.46l-.197-.46l.04-.016l.113-.048a93 93 0 0 1 1.67-.69a38 38 0 0 1 1.372-.523c.203-.072.392-.134.55-.179c.136-.04.31-.084.452-.084c.13 0 .267.03.38.06c.122.033.256.077.392.127c.274.1.583.23.869.356a29 29 0 0 1 .992.466l.066.032l.018.009l.006.003a.5.5 0 0 1-.447.895l-.005-.003l-.016-.008l-.062-.03a29 29 0 0 0-.959-.45a13 13 0 0 0-.803-.33a4 4 0 0 0-.309-.1a1 1 0 0 0-.119-.026l-.009.002c-.02.003-.073.014-.172.042a9 9 0 0 0-.492.161c-.388.137-.865.322-1.332.509a87 87 0 0 0-1.651.681l-.111.047zm-.657-.263a.5.5 0 0 1 .263-.656l.197.46l.197.459a.5.5 0 0 1-.657-.263m-1.903 3.96a.5.5 0 0 1 .707-.02l-.344.363l-.343.364a.5.5 0 0 1-.02-.707m4.57 3.387l2.763 1.036a1.5 1.5 0 0 0 1.587-.344l2.09-2.09a.5.5 0 0 1 .707.708l-2.09 2.09a2.5 2.5 0 0 1-2.645.572l-2.82-1.057l-.023-.011a3 3 0 0 1-.434-.292c-.162-.125-.352-.28-.557-.455a57 57 0 0 1-1.358-1.199a128 128 0 0 1-1.623-1.5l-.109-.102l-.038-.036l.343-.364l.344-.363l.037.035l.107.101a132 132 0 0 0 1.61 1.488c.46.417.935.84 1.333 1.178c.2.169.377.313.52.424c.132.101.215.157.256.18M3.67 14.288a.5.5 0 0 1 .703-.063l.959.8a1.5 1.5 0 0 0 .753.334l1.236.174a.5.5 0 1 1-.138.99l-1.237-.173a2.5 2.5 0 0 1-1.255-.557l-.959-.8a.5.5 0 0 1-.063-.705"
            clip-rule="evenodd"
          />
        </g>
      </svg>
    );
  },
});

export const Calculator = defineComponent({
  name: "Calculator",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.5"
            d="M21 12c0 4.714 0 7.071-1.318 8.535S16.242 22 12 22s-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536S7.758 2 12 2s6.364 0 7.682 1.464c.876.974 1.17 2.343 1.268 4.536"
          />
          <path
            stroke="currentColor"
            stroke-width="1.5"
            d="M7 8c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 6 8.536 6 9 6h6c.465 0 .697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C17 7.304 17 7.536 17 8s0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C15.697 10 15.464 10 15 10H9c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 8.696 7 8.464 7 8Z"
          />
          <circle cx="8" cy="13" r="1" fill="currentColor" />
          <circle cx="8" cy="17" r="1" fill="currentColor" />
          <circle cx="12" cy="13" r="1" fill="currentColor" />
          <circle cx="12" cy="17" r="1" fill="currentColor" />
          <circle cx="16" cy="13" r="1" fill="currentColor" />
          <circle cx="16" cy="17" r="1" fill="currentColor" />
        </g>
      </svg>
    );
  },
});

export const Car = defineComponent({
  name: "Car",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g fill="none">
          <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
          <path
            fill="currentColor"
            d="M15.84 4a3 3 0 0 1 2.499 1.34l.105.172L20.438 9H21.6a.4.4 0 0 1 .392.32L22 9.4v.475a.8.8 0 0 1-.502.743l-.128.04a5 5 0 0 1 .484 2.502l-.027.287l-.725 5.801a2 2 0 0 1-1.827 1.746l-.158.006H18a2 2 0 0 1-1.995-1.85L16 19H8a2 2 0 0 1-1.85 1.995L6 21H4.883a2 2 0 0 1-1.96-1.596l-.025-.156l-.725-5.8a5 5 0 0 1 .34-2.528l.117-.263l-.024-.005a.8.8 0 0 1-.599-.668L2 9.875V9.4a.4.4 0 0 1 .32-.392L2.4 9h1.163l1.993-3.488A3 3 0 0 1 7.96 4.007L8.16 4zm3.92 8.036a2.95 2.95 0 0 1-2 .957l-.206.007H6.446a2.96 2.96 0 0 1-2.205-.964a3 3 0 0 0-.103.928l.02.235L4.883 19H6v-1a1 1 0 0 1 .883-.993L7 17h10a1 1 0 0 1 .993.883L18 18v1h1.117l.725-5.801c.05-.392.02-.787-.083-1.163ZM5.737 13.898L8.48 15.38c.373.202.218.769-.206.752l-2.314-.093A1 1 0 0 1 5 15.04v-.7a.5.5 0 0 1 .738-.44Zm13.262.44v.701a1 1 0 0 1-.96 1l-2.314.092c-.424.017-.58-.55-.206-.752l2.742-1.48a.5.5 0 0 1 .738.44ZM15.84 6H8.16a1 1 0 0 0-.868.504l-1.714 3A1 1 0 0 0 6.446 11h11.108a1 1 0 0 0 .868-1.496l-1.714-3A1 1 0 0 0 15.839 6Z"
          />
        </g>
      </svg>
    );
  },
});

export const Tools = defineComponent({
  name: "Tools",
  setup() {
    return () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="m10.05 10.607l-7.07 7.07a2 2 0 0 0 0 2.83v0a2 2 0 0 0 2.828 0l7.07-7.072m4.315.365l3.878 3.878a2 2 0 0 1 0 2.828v0a2 2 0 0 1-2.828 0l-6.209-6.208M6.733 5.904L4.61 6.61L2.49 3.075l1.414-1.414L7.44 3.782zm0 0l2.83 2.83" />
          <path d="M10.05 10.607c-.844-2.153-.679-4.978 1.061-6.718s4.95-2.121 6.717-1.06l-3.04 3.04l-.283 3.111l3.111-.282l3.04-3.041c1.062 1.768.68 4.978-1.06 6.717c-1.74 1.74-4.564 1.905-6.717 1.061" />
        </g>
      </svg>
    );
  },
});
