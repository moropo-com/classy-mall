import React from "react";
import Svg, { G, Path, Text, TSpan } from "react-native-svg";
import { getHightLightColorForShop } from "../helpers/hightlighting";
import { SHOP_LIST } from "../constants/constants";

const SvgComponent = ({ navigateToShopId, highlightedShops }) => (
  <Svg width={400} height={558} viewBox="10 -25 250 1000">
    <G fill="none" stroke="#000" strokeWidth={0.493}>
      <Path
        d="M123.08 236.065l-4.568.304v5.989l4.567-.305v-5.988M139.827 184.34l-4.568.305v5.988l4.568-.304v-5.989M152.717 183.955l-4.567.304v5.989l4.567-.305v-5.988M168.653 244.895l-4.568.305v5.988l4.568-.304v-5.989M164.694 482.304l4.77.101v-5.988l-2.232-.102h-2.538v5.989M105.824 397.754h4.568v-5.887h-4.568v5.887M157.386 465.76l.305-2.538-15.631-.203v9.947l14.21.304 1.116-7.51"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M136.985 472.864v9.034l11.266.203h6.8l1.219-8.83-14.21-.305-5.075-.102"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M136.985 462.917l-21.214-.304 15.631 19.183 5.583.102v-9.034l5.075.102v-9.947l-2.944-.102H136.985M153.53 315.336l11.469-.406-2.03-14.108-9.44.507v14.007M157.488 341.523v10.15l12.789-.406-1.523-10.048-11.266.304M126.023 342.437l-10.353.304-.812 6.8 3.857 3.046 7.308-.203v-9.947M120.542 315.336l11.266-.406v-10.759l-9.338.406-1.928 10.76"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M131.808 314.93l-11.266.406-1.015 5.684-2.335 2.335v7.917l-1.522 11.47 10.353-.305v-9.947l31.465-1.015v10.048l11.266-.304L165 314.93l-11.47.406-19.183.812-2.538.102v-1.32M157.59 392.78l-17.357.204-.102 19.792 24.766-.101 2.233-15.936-9.54.102v-4.06M159.112 453.173l-17.052-.203v10.049l15.63.203 1.422-10.049M153.164 417.77v18.27h8.323l1.015-6.09 1.827-12.18z"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M153.123 428.915H142.06v24.055l17.052.203.71-4.567 1.624-11.571h-8.323v-8.12M118.41 416.938h-2.537v11.875l16.443.102v-11.977H118.41M136.985 440.892l-21.112-.203-.102 21.924 21.214.304v-22.025"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M115.873 440.689l21.112.203v-5.989h-4.67v-5.988l-16.442-.102v11.876M118.715 375.83l-1.015 1.523-1.827 1.827v14.007l21.72-.203v7.917l-.1 11.875h2.638l.102-19.792 17.356-.203v4.06l9.541-.102 3.147-21.822-51.562.913M119.222 375.12l-.507.71 51.562-.913-1.523-1.32-1.32-1.624-1.116-1.928-.71-2.132-.508-2.334-.203-2.335.305-1.725.203-1.523.203-1.42.71-2.132 1.117-2.03 1.32-1.726 1.522-1.42-12.79.405v-20.198l-31.464 1.015v19.894l-7.308.203.507.71 1.218 2.436 1.523 5.481-.102 5.887-1.42 5.583-1.219 2.436"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M118.512 402.93l-.508.813-.609.609-.71.406-.812.101v7.917h21.619l.102-11.875-18.778.101v1.015l-.304.914M115.873 397.145l.812.102.71.406.61.609.507.812.304.913v1.015l18.778-.101v-7.917l-21.721.203v3.958M129.372 244.083l-1.725 15.936 30.145-1.827-1.624-15.834-26.796 1.725M160.431 284.074l-20.097 1.015v13.5l22.127-1.015-2.03-13.5M137.188 290.063l-13.195.609-1.523 8.729h.61l14.108-.61v-8.728"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M140.375 281.76v4.06l20.097-2.03-2.639-26.39-15.631 2.03h-14.616l-1.015 10.15-4.06 6.09 3.045 6.09z"
        strokeWidth={1.0007899999999998}
      />
      <Path
        d="M125.515 281.943l-1.522 8.729 13.195-.61v-8.627l-11.673.508M160.675 208.68l-4.466-6.09-28.623 2.03-4.872 6.09v12.18l4.872 6.09 28.623-2.03 4.466-6.09z"
        strokeWidth={1.0007899999999998}
      />
      <G>
        <Path
          d="M324.861 658.305l-.101 84.752 64.858 7.207.102-86.681-64.859-5.278M347.191 775.131l-.101 84.042 42.427 6.395.101-85.26-42.427-5.177M325.064 470.936l59.784 1.015h5.075l.101-86.478-64.96.71v84.753M389.821 552.44l-64.858-2.842-.102 84.753 64.859 4.77.101-86.68M327.5 320.716v42.325l64.757-1.32.102-43.238-64.859 2.233"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M392.359 275.244l-64.757 3.146-.102 42.326 64.859-2.233v-43.24M347.8 162.68v51.055l42.427-3.045v-51.664L347.8 162.68"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M347.8 213.735l-.101 32.987 42.427-2.436.101-33.596-42.427 3.045"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M139.218 143.09l1.624 1.828 9.54 10.86 6.294-.609v-13.398l-8.932-10.454-8.526 11.774M121.455 167.654l-7.612-10.252-18.27 22.736 7.105 9.744 2.233-2.842 12.687 13.5v-3.553l6.192-.507v-13.906l1.32-9.947-3.655-4.973M106.738 285.8l-15.022.812v8.83l13.702-.609 1.32-9.033"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M91.716 280.014v6.598l15.022-.812 1.015-6.598-16.037.812M114.35 219.317V211.4l3.248-4.466v-6.394l-12.687-13.5-2.233 2.842-3.451 4.263-7.613.61v9.845l-3.248.203v16.443l25.984-1.929M154.646 121.776l-.71.913-6.192 8.628 8.932 10.454v13.398l6.394-.609 7.714-13.702v-2.233l-15.428-17.763-.71.914"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M153.935 122.69l.812-1.117 3.045-4.263 1.827-2.436 9.744-13.398 31.567-43.747-55.927-62.118-92.365 132.356 11.673 14.109 23.04 28.115 1.015 1.218.305.406 6.902 8.323 18.27-22.736 7.612 10.252 17.763-24.563 8.526-11.774 6.191-8.628M103.185 307.115l-15.123.609-.102 13.702v3.959l13.195-.406 2.03-17.864M94.355 393.39l3.755-.102v-12.992l-5.684-6.597-11.977.203-.101 19.59 14.007-.102M79.333 396.942h-.914v13.703h9.034v2.334H98.11v-16.138l-18.777.101M79.881 436.04v6.09l8.932 10.15h9.135v-16.24H79.881M79.333 424.449h-.914v4.161h19.59l.101-15.63H87.453v11.469h-8.12"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M78.42 436.121h1.522l18.067.102v-7.613h-19.59v7.511"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M79.942 436.121h-3.248l-12.282-.101 19.59 24.563 4.872-7.511-8.932-11.064v-5.887M48.172 443.328h-1.218l-.101 19.285v5.785l5.176.102h5.177v-25.071l-9.034-.101"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M29.395 445.256l-1.421.203v23.04l-1.929 3.147 2.64.102 8.931.203 9.237-9.338.101-19.285-1.522-.102v-3.857H33.759v5.684l-4.364.203"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M-1.664 450.839l1.522 2.03 5.583 7.41 5.684.1 11.47 17.053 3.45-5.786 1.929-3.146v-23.04h-5.379v-5.786h-2.843v-5.786l-21.315-.101-.101 17.052M82.682 321.63v15.732l17.154-.61 1.32-11.773-13.196.406v-3.959l-5.278.203M79.637 332.287V308.13l-9.338.304-2.639.102-44.05 1.928-.102 113.477H48.172v19.387l9.034.101v16.748h2.639l24.157.406-19.59-24.563 12.282.101.101-103.733 2.842-.101"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M81.769 350.354l4.669-.102 11.875-.304 1.523-13.195-17.154.609-2.233 3.248v9.744h1.32"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M86.438 350.252V358.068l6.09-.102 5.684-7.206.101-.812-11.875.304M39.078 269.58L23.65 302.06v8.12l44.051-2.03V298h19.488v-18.27h20.503l4.466-6.09-4.06-6.09 3.045-14.21H39.078zM44.965 170.11l-5.684 2.03-.203 81.2h72.065v-30.45h-.609l-17.052 2.03h-5.075v-52.78l-1.015-2.03-23.142-28.42zM86.377 358.9v6.09l-5.887 2.03v6.09h11.977V358.9z"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M141.45 767.417v17.966l9.339 1.218v-17.966l-9.338-1.218M160.33 772.39l-3.451-3.044-6.09-.71V786.6l3.958.609 5.583-4.568v-10.251"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M133.128 766.402l-.102 17.864 8.425 1.117v-17.966l-3.654-.507-4.67-.508"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M123.891 769.549v5.988l7.207 8.425 1.928.304.102-17.864-1.421-.203-4.67-.609-3.146 3.959M122.064 733.415l-4.567-.508v5.989l4.567.507v-5.988M165.71 509.303h-1.32v6.09l4.872.101v-5.988l-3.553-.203M158.909 534.475l-.71-5.38-13.399-.507-4.77-.203v10.657l19.59.914-.711-5.481"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M156.574 516.915l-11.774-.406v12.079l13.398.507-1.624-12.18"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M144.496 508.288h-4.466v20.097l4.77.203v-12.079l11.774.406-1.218-8.526h-5.988l-4.872-.101M148.312 561.535v11.977l16.078.954-.203-1.421-1.421-10.76-22.736-1.116"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M160.025 542.696l-.406-2.74-19.59-.914v22.127l22.737 1.117-2.74-19.59M111.102 598.927l-4.669-.304v5.988l4.67.305v-5.989M152.819 652.316l14.21 1.218 1.725-12.078-15.834-1.218-.101 12.078"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M140.943 663.278l24.36 2.233 1.726-11.977-14.21-1.218.101-12.078-11.875-1.015-.102 24.055M140.943 687.334l21.01 2.03 1.625-11.876-22.635-2.131v11.977"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M140.943 663.278v12.079l22.635 2.131 1.725-11.977-24.36-2.233M122.267 685.507l9.338.913v-10.048l-11.57-1.117 2.232 10.252"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M116.177 661.045l-.406 1.015-.304 1.218v1.117l.507 2.334.508 1.117.71.812.812.71.812.508 1.218 5.38 11.571 1.116v-9.947l2.538.304 2.131.203v-6.394l-18.067-1.624-.812.507-.71.71-.508.914M116.786 648.053l19.488 1.624v-10.759l-1.42-.101-19.59-1.624 1.522 10.86"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M116.786 648.053l1.421 10.86 18.067 1.625v-10.86l-19.488-1.625M139.928 708.649l19.285 2.03 2.233-18.067-21.518-2.132v18.169"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M139.928 720.321l17.763 2.03 1.522-11.672-19.285-2.03v11.672M157.69 722.351l-17.762-2.03v11.673l5.38.609 10.962 1.32 1.42-11.572"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M145.206 746.711l7.917.914 3.147-3.147v-10.556l-10.962-1.32-.102 14.11M137.188 709.867l-12.282-1.32-3.755 7.308 4.669 4.263 11.368 1.218v-11.47"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M124.906 708.547l12.282 1.32v-19.691l-15.022-1.523 2.74 19.894M127.038 730.573l10.15 1.116v-10.353l-11.368-1.218 1.218 10.455M137.188 731.69l-10.15-1.117 1.116 9.44 2.944 4.973 14.108 1.725.102-14.108-5.38-.61-2.74-.304M147.338 589.285v10.048l19.995 1.32-1.624-10.252-18.371-1.116"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M141.045 598.927l6.293.406v-10.048l18.371 1.116-2.03-12.18-22.634-1.32v22.026"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M147.338 599.333l-6.293-.406v5.278l-.102 7.917 28.623 2.03-2.233-13.5-19.995-1.319"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M118.309 610.6l4.06 7.612v11.876l-7.105 7.105 19.59 1.624 1.42.101 2.64.203 2.13.102 11.876 1.015 15.834 1.218-1.42-2.03-1.117-2.233-.305-1.117-.507-1.218-.203-1.218-.406-1.218-.102-1.32-.304-1.319.101-1.218-.101-1.32.101-1.217.102-1.32.304-1.218.203-1.218.406-1.218.305-1.116 1.015-2.132.406-.507 1.015-1.421 1.32-1.726-28.624-2.03-22.634-1.522M131.849 572.05l-15.428-2.03v-22.33l20.097 2.03.203 4.06h-5.075zM136.274 573.857l-20.198-1.117v33.698l2.233 4.162 22.634 1.522.102-7.917-4.77-.304v-30.044"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M116.36 548.583l.122-12.078 10.86.507v-7.917l9.44.427-.203 20.523-20.097-1.462"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M127.383 537.54v-8.12h-10.962v8.12zM136.721 529.42v-20.3h-5.887l-14.21 20.3z"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M58.728 787.819l-7.308-1.117v21.315l1.929.305.609.101 22.634 3.35 2.74-3.553-8.627-26.593-11.57 5.989-.407.203M37.515 784.774l-2.233-.305v5.786l-2.842-.406v11.57l2.842.407v9.642l4.364.71v-3.856l2.64.304 1.725.305 2.131 4.161 1.827 2.74 3.147-3.552.304-4.263v-21.315l-13.905-1.928M83.697 761.733l-12.992 19.894 8.628 26.593 9.338-12.281v-33.394l-4.974-.812M74.867 694.337l3.045.305v-13.703L51.116 678.3v27.304l2.639.507.507.102 6.293 2.639 5.786 4.263 8.526-18.778"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M77.912 694.642l-3.045-.305-8.526 18.778 4.973 5.684 2.233 3.35 1.015 2.03.914 1.623.71 1.827 1.015 1.929.508 2.03.812 2.03 1.015 4.161 22.736 2.64v-3.96l2.639.305 5.075.61-1.421-9.034-17.966-2.03-3.045-.305v-30.348l-9.642-1.015M51.055 677.61h-5.684v4.06l-11.774-2.03v28.42h5.887v4.06h2.639l8.932 2.03v-8.12z"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M48.274 524.528v18.168l8.83.406v-23.345l-8.83-.304v5.075M124.297 907.386l6.7-3.045 1.217-84.854-10.86-15.834-21.112 69.121 1.522.203v.102l18.88 35.93 3.653-1.623"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M131.098 904.442l-6.8 2.944-3.655 1.624-18.879-35.931-18.473 20.706 16.545 25.578 4.466-4.67 23.548 35.627 18.879-19.894-1.929-3.248-1.218-2.131-12.484-20.605"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M130.996 904.34l.102.102 12.484 20.605 2.436 3.958 1.726 2.842 9.642-10.15.305.508.71 1.015 3.451 5.075 10.353-10.86.61 1.014 4.668 6.902 11.673-12.078-18.067-26.39v-26.39l3.45-3.756-1.928-2.74 2.436-2.538-1.928-2.842-1.421-3.248-.61-3.552-11.773-16.95-2.842 3.044-1.015 1.015-14.21-2.131-9.034-7.308-1.218 84.854M63.6 839.99l-10.657 11.672 27.71 43.036 19.589-21.924 21.112-69.121-8.222-12.079-1.42-2.131-10.252 11.368-10.962 12.078-.914 1.015-2.131-3.146-1.523 1.725-.507.61-1.218 1.42-2.132-3.146-3.35 3.857-.913 1.015-26.694-3.959-3.147 3.553L63.6 839.99"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M106.94 764.778l-15.224-1.928-.102 29.435 4.568.71 5.278 7.816 10.251-11.368 1.421 2.131 4.872-6.191-3.35-15.631-7.713-1.015v-3.959M95.167 707.126l10.657 1.117v-13.804L90.6 692.916v7.816l4.568.406v5.988M107.448 721.64L90.6 719.713v6.598l17.966 2.03-1.117-6.7"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M107.448 721.64l3.451-6.19-5.075-5.076v-2.131l-10.657-1.117v-5.988l-4.568-.406v18.98l16.85 1.929M87.453 663.075v1.726l-.102 14.007 13.703 1.32v-5.99l3.857-6.292-3.857-3.553-13.601-1.218"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M82.885 654.55v9.845l4.568.406v-1.726l13.6 1.218-1.522-8.323-16.646-1.42M86.844 622.678v7.917l6.09.508v-7.917l-6.09-.508"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M23.406 668.15l4.365.406v3.756l48.517 4.669 3.552-5.075v-17.661l1.726.203 1.32.101 16.645 1.421-1.827-19.69-4.77-5.177-6.09-.508.304 2.436.203 1.523-10.454-.812h-.102l-53.287-4.263-.102 38.671M92.934 613.34l6.09-5.48v-5.888l-18.98-1.32v21.519l6.8.507 6.09.508v-9.846M79.942 543.61v11.835l17.762.812v-22.29l-6.191-.203-2.64-.101-1.014-.102-7.917 10.049"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M60.434 554.612l-.71.975 19.812.223.02-12.12 8.303-9.905 1.015.101-6.395-9.033-22.045 29.76M82.926 563.93h3.045v8.12h11.368v-16.24H82.723v6.09h-3.248v4.06h3.451z"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M86.032 576.496l-.995-.081-.71-.082v6.09l13.377.873v-10.759l-11.672-.71v4.669"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M79.637 576.09l-.101 13.905 18.168 1.218v-7.917l-13.377-.873v-5.745M80.043 592.837v7.816l18.98 1.32v-7.918l-18.98-1.218M26.248 537.824l7.41.305v7.714l11.672.609v-3.857l2.944.101v-17.864l-3.35-.101-4.872-8.526-6.09 8.12-4.06-.102-9.236 13.297 2.639.203 2.943.101"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M23.447 557.84v71.05l53.389 4.06v-77.14H59.784l6.699-10.15 16.037-20.3-25.375-2.03v20.3H48.01v2.03l.203 14.21zM12.343 527.471l-.203.305-9.947-.406v19.488l18.473.812V537.52l9.236-13.297 4.06.102 6.09-8.12-4.872-12.079-6.394-.304h-2.233v5.785l-14.21 17.864"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M176.976 797.766l-12.89-1.827v10.15l12.89 1.827v-10.15M176.265 830.956l2.436-.812h.203l2.74.203 2.741 1.218 2.436 2.132 1.929 2.842 12.789-13.906.812-.812-10.353-1.42v-2.03l-25.781-3.756v6.09l8.12 11.672 1.928-1.42M176.164 733.516l-1.827 11.977 14.514 1.624.102-12.18-12.79-1.42"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M177.89 722.859l-1.726 10.657 12.789 1.421v-4.06l2.74-3.45-2.74-3.452-11.064-1.116"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M186.618 712.912l-7.105-.812-1.624 10.759 11.064 1.116 2.74 3.451 2.74-3.45 3.35.405V714.13l-11.165-1.218M169.87 783.048l-.71 2.538-.304 5.582-4.77 4.77 12.89 1.828v10.15l17.56 2.436 1.014.101.914.102v-8.12l-3.35-.406-4.669-9.034v-14.21l-14.108-2.03v.203l-.406-.101-1.32 1.42-.71.914-.914 1.523-1.116 2.334M268.529 630.392l-.203.102-2.944-.203v9.744l2.335.203 4.466.406v-9.947l-3.654-.305M262.642 629.986l-4.568-.304v22.837l7.207.61.101-12.993v-9.845l-2.74-.305M252.898 632.727l-.61.507-10.352-.71v14.514l8.424.71v4.162l7.714.61v-22.838l-1.827-.102-3.35 3.147M237.064 632.118l-6.7-.508v30.856l6.7.61v-30.958M221.027 661.756l.101-14.515-3.857-6.496-9.44-.71V664.598l13.196 1.218v-4.06"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M221.027 661.756l2.537.203 6.8.507V631.61l-3.349-.203-7.51 8.932-.102.102-.406.507-1.726-.203 3.857 6.496-.101 14.515M181.645 694.236l-1.827 13.804 11.368 1.116v-6.902l2.537.305 4.06.406v-7.207l-16.138-1.522M187.227 650.59v1.828l-1.32 10.353 8.73.71 13.195 1.117v-12.282l-20.605-1.725"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M187.227 646.328v4.263l20.605 1.725v-12.281l-13.094-1.015-7.51 7.308M185.908 662.77l-1.32 9.948-.304 2.334 10.353.914V663.48l-8.73-.71"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M184.284 675.052l-.406 2.436-2.233 16.748 16.138 1.522v18.372l40.6 4.263.102-18.676 1.522.203.914.101 1.116.102 8.222.812.101-32.582-29.13-2.537h-.203l-13.195-1.218-13.195-1.117v12.485l-10.353-.914"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M184.893 512.855l-10.15-.406 1.969 13.297h18.25l-10.07-12.89M267.25 399.5h4.06v-8.12l-6.09-4.06v12.18h2.03M190.678 376.947l-2.74 3.857-1.523 11.672 23.345-.203.102-11.774-13.195.203-5.989-3.755"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M250.056 371.161l-6.8.203V412.878h22.532v-19.285l-8.627-6.598v-4.161l-7.105-11.673M226.65 371.08h-2.03v-2.03H210.41V409.65h4.06v16.24h20.3v-12.18h8.12v-26.39h-6.09v-16.24zM209.862 372.887l-16.443.304-2.74 3.756 5.988 3.755 13.195-.203v-7.612M265.382 602.886l.71-.61 2.944-1.319 2.03-.203 1.218-.101v-10.455l-6.902-.406V602.886M209.456 608.367v12.586l8.221.609.102-12.586-8.323-.61"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M201.234 620.445l8.222.508v-12.586l-8.222-.61v12.688M188.344 606.946l9.642.609v-13.906l-11.47-.71 1.828 14.007"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M197.986 607.555l-9.642-.61v5.685l5.278 7.206 7.612.61v-12.688l-3.248-.203M265.22 602.5l-2.03 2.03-2.03 2.03-12.18 16.24-4.06-2.03v-14.21h-8.12v-14.21l28.42 2.03z"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M220.56 620.77l10.15-10.15 2.03-2.03v2.03l4.06 10.15v-28.42h-6.09v-8.12l-32.48-2.03v24.36l2.03 2.03h18.27v12.18zM178.6 538.535l3.45 23.345 31.364 1.624-.101 12.281 21.72 1.218v-18.676l2.538.102 4.263.203v-10.353l-8.932-1.218v-16.545l-35.322-1.42-5.988-.204v10.15l-12.992-.507M174.641 479.36l8.12.203 13.5-17.458 39.99.508h6.497l.101-33.09-29.333-.1h-2.436l-.102-15.835-27.303.102-9.034 65.67"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M182.05 561.88l1.828 12.281 29.435 1.624.101-12.281-31.363-1.624M184.791 580.657l1.726 12.282 11.47.71v-12.281l-13.196-.71M186.415 392.476l-2.131 16.545 20.3-.102 5.176-.101v-16.545l-23.345.203M179.96 537.54l-4.06-12.18h18.27l4.06 4.06h-6.09v10.15z"
          strokeWidth={1.0007899999999998}
        />
      </G>
      <G>
        <Path
          d="M177.93 159.96l-3.857-6.09-1.827 2.03h-1.015l-2.842 2.03-4.06 4.06v6.09H177.93z"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M173.93 193.232l3.35 4.06 3.654-4.67 11.368-.913v-12.281l9.846-.812v-11.977l-12.79-14.82-1.928 2.03-2.131 1.32-2.335.508-.203.203-3.146 2.334-1.421 1.015v8.12l-9.643.914-4.161.406v19.285l9.54-.812v6.09"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M177.28 197.292l-3.35-4.06v-6.09l-9.54.812v2.233l4.466 14.819 21.01-1.624 2.436-3.553v-8.12l-11.368.914-3.654 4.669M265.89 366.39l5.887-4.364v-10.454l-4.466.101h-1.421v14.718M255.638 366.594h2.538l7.714-.203v-14.718h-.914v-8.323l-13.702.305v18.777l.203.203 4.161 3.959M251.274 343.655l-10.15.304v18.676l10.15-.203v-18.777M204.482 352.485h.305l6.496-.101v-18.27l-6.8.203v18.168"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M195.855 352.79l1.928-.102 6.7-.203v-18.168l-8.628.304v18.169"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M188.75 346.903l6.496 5.887h.609V334.62l-8.526.203 1.42 12.079M237.774 333.708v-.406l-26.491.812v18.27l7.105-.203.101.203L226 362.94h4.872l6.8-.203.102-29.03"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M184.69 309.348l2.639 25.476 8.526-.203 8.627-.304 6.8-.203V295.34l-14.006.71-.102 12.79-12.484.507"
          strokeWidth={1.0007899999999998}
        />
        <Path
          d="M183.269 296.66l1.42 12.688 12.485-.508.102-12.789-14.007.61"
          strokeWidth={1.0007899999999998}
        />
      </G>
    </G>
    <G
      data-id={SHOP_LIST.orangecafe.key}
      onPress={() => navigateToShopId(SHOP_LIST.orangecafe.key)}
    >
      <Path
        fill={
          getHightLightColorForShop(SHOP_LIST.orangecafe.key, highlightedShops)
            .fill
        }
        stroke={
          getHightLightColorForShop(SHOP_LIST.orangecafe.key, highlightedShops)
            .stroke
        }
        strokeWidth={
          getHightLightColorForShop(SHOP_LIST.orangecafe.key, highlightedShops)
            .strokeWidth
        }
        d="M174.337 745.493v31.262l14.108 2.03v14.21l4.67 9.034 3.349.406v8.12l.609.101 54.404 7.714v-6.293l1.116.102 1.32.203.304.101 10.962 1.421.102-92.67-26.898-2.841-40.6-4.263v10.251l-3.35-.406-2.74 3.451-2.74 3.451v4.06l-.102 12.18-14.514-1.624"
      />
      <Text
        x={175}
        y={768}
        fontFamily="'Times New Roman'"
        fontSize={15.933}
        strokeWidth={1.195}
        style={{
          lineHeight: "29.876px"
        }}
      >
        <TSpan x={175} y={768}>
          {"Orange Cafe"}
        </TSpan>
      </Text>
    </G>
    <G
      data-id={SHOP_LIST.tea.key}
      onPress={() => navigateToShopId(SHOP_LIST.tea.key)}
    >
      <Path
        fill={
          getHightLightColorForShop(SHOP_LIST.tea.key, highlightedShops).fill
        }
        stroke={
          getHightLightColorForShop(SHOP_LIST.tea.key, highlightedShops).stroke
        }
        strokeWidth={
          getHightLightColorForShop(SHOP_LIST.tea.key, highlightedShops)
            .strokeWidth
        }
        d="M174.641 511.84l.102.61 10.15.405 12.687 16.24 35.322 1.421h2.538l2.334.102 4.06.203v10.353l10.15.507v-10.454l2.436.101 11.267.406.101-46.08-5.176-.102v-22.533l-9.541-.203h-8.323l-6.496-.203-39.991-.508-13.5 17.458-8.12-.203v32.48"
      />
      <Text
        x={175}
        y={501}
        fontFamily="'Times New Roman'"
        fontSize={16}
        style={{
          lineHeight: 25
        }}
      >
        <TSpan x={185} y={501}>
          {"Tea Shop"}
        </TSpan>
      </Text>
    </G>
    <G
      data-id={SHOP_LIST.babies.key}
      onPress={() => navigateToShopId(SHOP_LIST.babies.key)}
    >
      <Path
        fill={
          getHightLightColorForShop(SHOP_LIST.babies.key, highlightedShops).fill
        }
        stroke={
          getHightLightColorForShop(SHOP_LIST.babies.key, highlightedShops).stroke
        }
        strokeWidth={
          getHightLightColorForShop(SHOP_LIST.babies.key, highlightedShops)
            .strokeWidth
        }
        d="M175.758 246.925v8.019l1.522 2.03 2.944 19.792 3.045 19.894 14.007-.609 14.007-.71v38.773l26.491-.812v-24.563l13.5-.508v-18.777l13.702-.61.102-115.202v-1.015l-51.765 4.466-8.526.71v18.474l-12.282 17.56-17.762 1.319-5.583 7.714v18.27l4.162 5.785h1.725l.71-.101"
      />
      <Text
        x={172}
        y={240}
        fontFamily="'Times New Roman'"
        fontSize={24.201}
        strokeWidth={1.815}
        style={{
          lineHeight: "45.378px"
        }}
      >
        <TSpan x={172} y={240}>
          {"Babies"}
        </TSpan>
      </Text>
    </G>
  </Svg>
);

export default SvgComponent;
