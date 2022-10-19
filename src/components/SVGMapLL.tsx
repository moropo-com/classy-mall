import React from "react";
import { G, Path, Text, TSpan } from "react-native-svg";
import { getHighlightSvgPropsForShop } from "../helpers/hightlighting";
import { SHOP_LIST } from "../constants/shopList";
import { ISvgComponentProps } from "../types";
import MapWrapper from "./MapWrapper";

// TODO Fix issue with TS complaining on typing of Text component from
// react-native-svg

// 2do Export each shop in an individual parametrized component

const WALL_STROKE_WIDTH = 0.26432500000000003;

const SvgComponent = ({
  navigateToShopId,
  highlightedShops,
  layout,
}: ISvgComponentProps) => {
  return (
    <MapWrapper layout={layout} viewBox="0 0 104 273">
      <G fillOpacity={0} stroke="#000" strokeWidth={0.485} fill="none">
        <Path
          d="M35.297 136.79h-2.005v9.042l3.013.055v-9.069l-1.008-.027M50.394 141.494v-2.469H48.06l-2.752-3.232h-5.352l-1.16 1.799V145.462l1.16 1.798h5.352l2.752-3.232h2.333v-2.534M71.006 183.11l-1.69.927-.654 3.433v.028l-.027.19 2.452.191 2.18 2.017v1.77l6.677.491v-1.771l-4.687-5.45-3.407-.218-.844-1.608M92.506 185.754l-4.415-.3v2.97l2.426 1.335v2.126l5.477.409.027-6.322-3.515-.218M62.613 222.269v2.316l5.04.572 3.57.409-1.144-1.308v-1.172l-7.466-.817M62.613 221.696v.573l7.466.817.409.055.463.054v-2.943l-6.131-.654-2.207 2.098"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M61.85 226.465v1.172l5.804.681v-3.161l-5.041-.572v1.144l-.763.736M65.229 208.071l-.41 2.235v.409l6.54.654v-2.725l-6.13-.573"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M71.36 206.3l-5.859-.545-.272 2.316 6.13.573V206.3M73.267 189.896l-2.18-2.017-2.452-.19-.681 3.569 5.313.409v-1.771M71.823 198.588v.464l1.908.163.3.027.027-4.087-6.731-.545-.681 3.542 5.177.436"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M66.646 198.152l-.41 2.235 5.587.49v-2.289l-5.177-.436M65.774 203.493l-.273 2.262 5.859.545 1.035-1.308v-.9l-6.621-.599"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M65.937 202.076l-.163 1.417 6.621.6v.899l1.118.109v-3.243l-7.467-.654-.109.872M63.43 232.024l2.017-1.635 2.207.273v-2.344l-5.804-.681-.028 2.316 1.608 2.071"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M68.455 235.572l.545.545h1.09l.545.545 4.905-4.36-4.36-.545v-1.635h1.09v-3.27l-1.09-1.09-3.27-.545v5.45l-2.725-.545-1.635 1.635 1.09 2.18 1.635 1.635H67.91zM97.302 178.641l-1.28-.081v3.815l.19.027h.163l.246.027 1.77.109v-2.425l-1.09-1.472M96.021 178.56l-.518-.028-2.97 1.009-.027 6.213 3.515.218v-7.412"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M91.47 179.895l-.354.136-4.196-.272v5.014l1.171.081v.6l4.415.3.027-6.213-.245.081h-.027l-.79.273"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M86.92 179.759l-4.333-.273v4.987l-.027.6 5.531.38v-.599l-1.171-.081v-5.014"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M78.009 181.911l2.262 2.426 2.316.136v-4.987l-1.335-.082-3.243 2.507M73.905 199.057v-3.815l-6.54-.545.545-3.27h5.45l6.54.545v7.63h-.545z"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <Path
          d="M78.265 182.162h-1.09v.545l-4.36-.545-1.635 1.09.545 1.635H74.995l4.905 5.45v9.265l3.815.545v-7.63l4.905.545v-1.09H90.255v-2.18l-2.18-1.635v-2.725l-5.45-.545v-.545h-2.18z"
          strokeWidth={WALL_STROKE_WIDTH}
        />
        <G>
          <Path
            d="M64.411 179.077l.273.709.463.627.572.517.654.327.736.137.708-.055.682-.245.572-.436.436-.572.272-.682.11-.735-.11-.763-.272-.736-.436-.627-.572-.49-.682-.327-.708-.137-.736.055-.654.245-.572.436-.463.572-.273.682-.082.735.082.763M62.013 195.21l-2.234-.164v1.635l1.934.163.3-1.635"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M59.779 195.046l-1.935-.164v1.635l1.935.164v-1.635"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M57.844 194.882l-1.69-.136v1.635l.6.055 1.09.081v-1.635"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.62 194.528v2.316l1.635.137.9-.6v-1.635l-2.535-.218M47.598 193.738v1.717l2.125.163v-1.717l-2.125-.163M45.472 193.574v1.69l2.126.19v-1.716l-2.126-.164M51.685 196.68l1.254.11.027-2.616-1.28-.11v2.617M49.723 195.618l.682.954 1.28.109v-2.616l-1.253-.11-.436-.026-.273-.028v1.717M45.772 197.199l.327 1.744 2.861.245v-1.717l-3.188-.272M57.68 140.328v2.316l2.208.055v-2.317l-2.208-.054M42.066 152.836v-2.262l-2.098-.082v2.262l2.098.082M61.768 159.839l-.409-2.916-4.006-.163v2.888l4.415.19"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M57.353 159.648l-.545-.027-.027 3.46 5.477.246-.218-1.744-.272-1.744-4.415-.191M60.296 149.266l-2.67-.082v2.316l2.997.082-.327-2.316M59.751 145.233l-4.578-.11v3.98l2.453.081 2.67.082-.19-1.499-.355-2.534M52.748 145.07v3.978l1.744.054h.681v-3.978l-2.425-.055M45.609 152.808l2.561.082v-3.978l-.872-1.036-1.99 2.098-.272.3h-.027l.6.845v1.69"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M48.17 152.89l3.488.136v-7.439l-2.125-.054-2.235 2.343.872 1.036v3.978M43.047 157.25v5.123l7.003.3v-5.15l-7.003-.273M43.047 152.727l2.562.081v-1.69l-.6-.844-1.935-.082-.027 2.535"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M45.609 152.808l-2.562-.081v4.523l7.003.273.436.027.382.027.79.027v-1.716h.436l.627.027v3.433l4.087.273.545.027v-2.888l4.006.163-.736-5.341-2.997-.082v-2.316l-2.453-.082v.028l-.68-.028-1.745-.054V154.198l-1.09-.027v-1.145l-3.488-.136-2.561-.082M58.17 221.042l.164-.681.41-2.016-3.19-.355v2.753l2.617.3"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M55.555 220.743v2.316l1.09.109.409.054.654.082.354-1.608.109-.654-2.616-.3M59.642 208.344l.11-.654-5.423-.518-.028 2.289 5.042.545.3-1.662M59.343 211.15v-1.144l-5.042-.545v2.943l3.652.382 1.39-1.635M59.234 197.934l-.028 2.78 1.772.163.136-.681.381-2.071-2.261-.19"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M56.972 197.744l-1.335.354v2.316l3.57.3.027-2.78-2.262-.19M62.64 191.803l.817-4.578-9.265-.681-.027 4.605 8.475.654M50.023 188.533v-1.99l-5.913-.435.845 4.605 5.068.382v-2.562"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.647 191.095l-.027 3.433 2.534.218 1.69.136 1.935.164 2.234.163.627-3.406-8.475-.654-.518-.054M44.955 190.713l.517 2.861 2.126.164 2.125.163.273.028.027-2.834-5.068-.382M52.912 200.169v2.289l7.657.681.409-2.262-1.772-.163-3.57-.3-2.724-.245"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M52.912 197.88v2.289l2.725.245v-2.316l-2.725-.218M52.176 199.46l-3.216-.272-2.86-.245.517 2.888 5.559.49v-2.86"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M52.176 199.46v-1.716l-3.216-.273v1.717l3.216.272M46.617 201.831l.545 2.889 5.014.463v-2.861l-5.56-.491M52.258 215.51v2.126l3.297.354 3.188.355v-2.153l-6.485-.681M52.912 206.79v.246l1.417.136 5.422.518.818-4.551-7.657-.681v4.333"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M48.306 208.589l2.235.218.027-2.044.409.028 1.199.109v-1.717l-5.014-.463.054.218v.027l.654 3.597.436.027M48.252 215.075v1.716l.627.49 3.379.355v-2.125l-4.006-.436"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M47.489 212.322l-.055.382v.381l.082.382.136.354.191.327.245.3.273.245.327.19 3.897.41.109.027 6.485.654v-.327l.409-.518v-1.744l-1.2-.79-.435.19-3.652-.38v-2.944l.028-2.289-1.417-.136v-.245l-.327-.055-.41.164-1.198-.11v1.854l-.436.163-2.235-.218v.927l1.39 1.853-1.39-.137-.272.191-.245.273-.191.3-.11.326M51.168 221.669l1.09.136v-4.169l-3.38-.354v2.262l1.227 2.016 1.063.109"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M51.168 223.713l-1.063-.136v2.86l.381.818.545.709.654.627.763.463.79.3.845.109.818-.055.763-.218.708-.409.573-.545.463-.68.3-.791v-2.316l-1.063-.137v-1.144l-1.09-.11v-5.068l-3.297-.354v4.17l-1.09-.137v2.044M58.65 164.417v2.496l.011.665 4.388.218-.627-3.27-7.712-.354M51.658 164.035l-8.202-.381v4.523l8.202.436v-4.578"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.075 173.137v.136l10.546.6h.327l.272.027-1.171-6.104-4.388-.218-.01-3.161-2.497-.18-1.444-.065-1.608-.082-.027 9.047M44.164 181.584l-.763.709.709 3.815 5.913.436v-4.578l-5.859-.382M42.35 172.99l.087-3.886-2.099-.082-.087 3.886 2.099.082M43.009 182.593v-2.262l-2.098-.082v2.262l2.098.082M44.475 175.077l-.545-.545-.545-.545h-2.18l-.545.545-.545.545-.545.545V177.257l.545.545.545.545.545.545.545.545h1.09l.545-.545h.545l.545-.545.545-1.09v-1.09z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
        <G>
          <Path
            d="M96.43 102.287h-.327l-.027 3.842 1.798-.681v-3.188l-1.444.027M94.304 102.341v4.388l1.09-.028.355-.3.327-.272.027-3.842-1.799.054M78.227 102.641l1.99 1.99 2.86-.055v-4.17l-6.867.191v2.044l1.962-.054.055.054"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M83.077 95.665l-14.279.436.709 3.979 3.57 2.643 3.133-.082v-2.044l6.867-.19v-4.742M88.882 95.502l-5.805.163v8.911l8.148-.164v-4.796l-1.962.055h-.381V95.5M75.556 81.85v-5.314l-10.082.545 1.717 9.755 6.73-.272 10.274-.41v-4.713l-8.639.408"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M73.921 86.564v2.943l-6.24.218 1.117 6.376 14.28-.436 5.804-.163 3.46-.11.028-5.395-4.715.19.028-4.196-3.488.164-10.274.409"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M73.921 89.507v-2.943l-6.73.272.49 2.889 6.24-.218M66.537 55.063v8.093l4.96-.354 1.035-1.172V54.6l2.261-.164v-2.344l1.717-.136-5.205-4.96-.98 1.5-3.788.299V55.063"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M66.537 55.063l-3.325.245v2.316l3.325-.218v-2.343"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M66.537 52.746l-3.325.246v2.316l3.325-.245v-2.317M63.212 52.992l3.325-.246v-3.951l-1.772.164-1.553 1.798v2.235M63.212 59.968l3.325-.246v-2.316l-3.325.218v2.344"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M66.537 59.722l-3.325.246v1.798l1.58 1.499 1.745-.11v-3.433"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
        <G>
          <Path
            d="M76.02 123.705v-3.515l-8.393.027-.6 3.488h8.993"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M64.929 135.968v1.008l5.014.082 3.27-3.951 19.02.19v-9.564l-3.733-.028h-.354v-3.57l-12.126.055v3.515h-8.993l-2.098 12.263M96.73 169.649h-.028l-1.199-.055v2.998l.137.027h.245l1.39.082.926-1.499.027-1.471-1.498-.082M91.825 171.992l-2.017-.109v4.905l4.333-2.888-2.316-1.908M68.308 168.096l.082.327 5.395.272-.027 3.107v1.008l5.695.327v-8.72l-11.854-.545.709 4.224"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M72.096 171.693l1.662.109.027-3.107-5.395-.272.027.272.763 4.442 1.144.954 1.772-2.398M80.925 174.908v1.662l3.87.246 2.343-1.635v-1.036h.354l1.39.082v-2.371h.381l.545.027 2.017.11 2.316 1.907.054-.136.355-.464.436-.408.517-.3v-2.998l1.2.055v-1.799l-2.371-.109v-1.798l-1.2-.055v1.799l-8.747-.436v-2.97l-3.46-.164v10.791"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M70.324 174.09l2.48 2.017 8.12.463v-1.662l-1.47-.109v-1.662l-5.696-.327v-1.008l-1.662-.11-1.772 2.399M72.15 159.13l-5.177-.19.517 3.488 4.66.19v-3.488M74.33 151.31l-1.117-1.09-7.712-.246.572 3.407 8.257.272v-2.343"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M66.073 153.38l.9 5.56 5.177.19v3.488l13.462.6.027-3.543.354.028 3.134.109v-8.04l-14.797-.462v2.343l-8.257-.272M64.902 146.296l.6 3.678 7.71.246-3.869-3.815-4.441-.11M97.874 112.451l-1.798.027v3.488l1.77-.027.028-3.488M88.854 109.862l.028-2.37-5.805.081-.027 2.371 5.804-.082"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M78.472 107.655v2.37l4.578-.081.027-2.37-4.605.081M78.472 110.026v-2.371l-3.978.082v2.343l3.978-.054M68.035 117.165l5.396-.027v-1.771l-4.36-4.524-1.036 6.322"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M73.43 117.138l-5.395.027-.3 1.744 5.696-.027v-1.744"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M74.45 107.497h-2.18l-3.27 3.27 4.36 4.36V118.942h22.89v-6.54l-2.18-1.635-3.815-3.27H88.62v2.18h-5.45l-4.905.545H74.45z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
        <G>
          <Path
            d="M64.275 106.047l.272.682.436.599.573.436.68.3.71.082H67l.681-.11.654-.326.572-.464.464-.6.272-.708.082-.763-.082-.763-.272-.681-.464-.6-.572-.463-.654-.272-.736-.082-.708.136-.681.3-.573.463-.436.627-.272.709-.082.735.082.763M38.878 106.32l.082.736.245.654.436.572.518.463.654.245.654.11.68-.11.655-.3.545-.463.409-.6.272-.68.082-.736-.082-.736-.272-.681-.41-.572-.544-.436-.654-.273-.681-.082-.654.11-.654.299-.518.463-.436.6-.245.681-.082.736M61.931 123.95l.6-3.487-5.178.027v3.46h4.578M56.427 112.288l2.18-.028v2.317l4.932-.055.818-4.714-2.943-1.499-2.507.055-.845 1.008-1.635.027v2.889M56.481 101.36l1.69-.054.736.708 2.507-.054v1.144l2.697-2.425-.354-1.826-7.276.191v2.316"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.184 109.454l-.027 9.755 8.938-.027.654-.027.79-4.633-4.932.055v-2.317l-2.18.028v-2.889l-3.243.055"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.184 101.442v8.012l3.243-.055 1.635-.027.845-1.008 2.507-.055v-6.349l-2.507.054-.736-.708-1.69.054-3.297.082M52.857 123.95v4.579l8.257.054.817-4.632H52.857M43.429 120.19v2.861h6.921v-2.888l-6.921.027M54.002 131.826v6.322l2.043.054.327.028 3.08.054 1.09-6.376-6.54-.082"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M52.83 133.08v.027l1.172.027v-1.308l6.54.082.572-3.325-8.257-.054-.027 4.55"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M52.203 133.107h-.272l-1.69-.028v5.042l5.532.081h.272l-2.043-.054v-5.014l-1.172-.027h-.627M52.105 126.572v-1.09H50.47v-2.18h-7.085v6.54h8.72v-.545z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M47.135 132.044l-1.2 1.39 4.306 4.687v-5.042l1.69.028v-3.298l-4.796-.054v2.289"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M45.01 132.398l.926 1.036 1.199-1.39v-2.29l-3.734-.026v2.643l1.608.027M59.588 86.782v1.444l2.37-.11-1.117-1.389-1.253.055M58.88 88.253l.708-.027v-1.444l-2.534.109v1.417l1.825-.055"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M58.88 88.253v1.117l-1.636.055v2.888l5.232-.19-.517-4.006-2.371.109-.709.027M53.784 87.027v1.417l2.534-.11v-1.416l-2.534.109"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.211 92.45v.081l-.027 8.911 3.297-.082v-2.316l7.276-.19-1.28-6.731-5.233.19-4.033.137M43.538 99.071v1.118l2.806 2.507 1.608-.028 1.335-1.825 2.67-.055v-1.962l-8.42.245"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M43.429 111.688v.654l8.529-.109.027-10.246-.027-1.199-2.67.055-1.336 1.825-1.608.028v4.714l-2.915 4.278"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M51.195 119.127l.763-.027v-6.867l-8.53.109v6.813l7.767-.028M51.985 95.393l-7.848.245-.6 3.433 8.42-.245.028-.627v-2.806M49.887 87.109l-1.09.054v1.69l1.58-.055v1.172l1.608-.055v-3.433l-1.526.054-.572.573"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M50.35 91.959l.027-.763V88.798l-1.58.055-3.488.136-.545 3.188 5.586-.218"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M44.764 92.177l-.627 3.46 7.848-.244V93.92l-1.199.027-.436.028v-2.017l-5.586.218M45.609 87.272l-.3 1.717 3.488-.136v-1.69l-3.188.109M55.391 84.602l.137.081.735.573.79-.028v-1.934l-1.662.081v1.227M59.533 83.157v1.962l2.18-.081-.327-1.962-1.853.081"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M59.533 85.12v-1.963l-2.48.137v1.934l.627-.027 1.853-.082M59.724 73.402l-.109-.736-.354-2.125-4.905.272v2.889l5.368-.3M51.168 65.063l-2.862.191v2.453l2.862-.191v-2.453M52.585 63.238l1.062-.082 1.635-.11v-4.005l2.017-.163V55.47l-.382-.626-.49-.518-.572-.436-.164-.055-.49-.218-.709-.163-.708-.027-.709.136-.708.272-.627.382-.6.518-.463.599-.381.654v2.289l1.008 1.254v1.962l1.28-.11v1.854"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M58.645 63.897l-1.09-4.905h-2.18v3.815l-1.635.545v1.635h1.09v2.725l3.815-.545zM51.168 65.063l2.48-.19v-1.717l-1.063.082v-1.853l-1.281.109-2.998.19v3.57l2.862-.19M52.694 78.361v5.123l2.697-.109 1.663-.081 2.48-.137 1.852-.081-.872-5.123-7.82.408M52.694 76.645v1.716l7.82-.408-.545-3.27-.245-1.281-5.368.3v2.752l-1.662.19"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M51.386 76.481l.245.109.327-.027.436.109.3-.027 1.662-.191v-5.641l4.905-.272.409.109-.028-.191.273-.164.245-.245.19-.272.137-.327.055-.327v-.327l-.082-.327-.136-.3-.191-.245-.245-.218-.6-.191-4.142.272-.409-.109v-2.725l-.68.055-2.453.163v2.48l-2.862.164-.3.218-.272.272-.218.327-.163.354-.082.355-.027.381.027.382.082.354.163.327.218.3.273.245.081.054 2.453-.163.436.109-.027 2.534v2.616"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M47.2 76.432h3.815v-5.45l-2.725.545-.545 2.18v1.635zM52.694 83.484v1.227l2.697-.11v-1.226l-2.697.11M49.015 83.528l2.943-.098V80.84l-2.943.153v2.534M48.835 83.517H46.11l.545-2.18 2.18-.545z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M46.671 80.405l-.109.681 5.396-.245v-2.452l-4.96.272-.327 1.744"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M47.27 77.162l-.272 1.499 4.96-.272v-1.826l-.327.027-.218.027-.082-.054-.354-.191-3.597.19-.11.6M45.565 86.242l3.27-.545 1.09-.545h2.18v-1.635H46.11zM57.555 132.022v3.27h2.18l.545-3.27z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
        <G>
          <Path
            d="M53.893 239.164l-1.663 1.526 3.543 4.06 3.324 3.76h.082l.654.11.9.136v-6.377l.79-.708-.709-.736-.49-.872-.164-.49-.082-.491-.054-.49.027-.491.082-.3.109-.409.054-.19.246-.436.218-.327-2.67-3.216-1.336-.19-.027 3.46-.518.49-.3.3-.054.028-.246.218-1.716 1.635"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.756 232.678l-1.226 1.199 3.08 3.652.245-.218.354-.327.518-.491.027-3.46-2.998-.355M50.84 235.54l2.753 3.27.3.354 1.716-1.635-3.079-3.652-1.69 1.662"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M53.593 238.81l-2.752-3.27-1.336 1.335-.327.327 3.052 3.488 1.663-1.526-.082-.082-.218-.273M14.723 138.584h-.245v8.12l3.38.11v-8.176l-3.135-.054M42.148 228.836l3.706 4.414.027-3.978-3.733-.436M36.998 193.084l-1.009 1.226V200.769l5.26.49-1.254-7.93-2.997-.245"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M44.846 225.838l-5.777-.681 3.079 3.679 3.733.436-1.035-3.434M35.962 220.28l4.006 3.27 4.878.572.027-2.834-1.58-3.134-7.304-.79-.027 2.915"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M38.878 224.912l.19.245 5.778.681v-1.716l-4.878-.573.163.164-1.253 1.199M35.99 209.407v5.75l.435.054 7.14.763-.927-5.886-2.67-.273-3.979-.408"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M39.968 209.815v-2.261l2.289.218-.082-.654-.926-5.86-5.26-.49v8.639l3.979.408"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M39.968 207.554v2.261l2.67.273-.272-1.662-.11-.654-2.288-.218M21.04 194.152v2.18l-3.27 4.905 2.725 5.995v31.61l1.635 2.18 16.895-16.35 1.09-1.09-4.36-3.27V195.787zM38.442 189.16v2.616l3.406.272-.381-2.67-3.025-.218M38.442 186.326v2.834l3.025.218-.41-2.861-2.615-.191M34.398 174.543v2.807l2.981.174v-2.807l-2.981-.174M34.436 157.523l3.515.163v-4.333l-.763-.899-3.815 3.815 1.063 1.254"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M37.951 157.686l-3.515-.163-1.063-1.254-2.806 2.807 4.632.19v1.69l2.752.109v-3.379M37.951 169.949l-6.485-.355v3.924l4.469.273 2.016-2.398v-1.444"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M21.683 167.96v4.986l9.783.572v-3.924l6.485.355v-8.884l-2.752-.109v-1.69l-4.632-.19-8.884 8.883M26.18 147.031l-2.29-.054v6.921l4.578-5.613-2.289-1.254M19.64 155.724v-8.883l-1.254-.077-3.842-.06v8.829l5.095.191"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M19.64 152.372l2.098.055.027-5.532-2.126-.054v5.531"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M21.738 152.427l-2.099-.055v3.352l2.67.109 1.581-1.935v-6.921l-2.125-.082-.027 5.532M10.075 147.822l-.218.408-.164.409-.109.354-.082.355-.027.408-.027.573v6.567l1.362-1.499h.41l1.062.055 2.262.081v-8.638l-2.807-.272-.627.272-.572.409-.463.518M3.371 147.985h-.027l-.055.354-2.07 1.308-.028 6.459 1.962 1.635 1.444.054v-1.09l.518.027 3.025.11v-7.603l-2.916-.082.136-.327.055-.354-.055-.355-.163-.327-.273-.3-.245-.136-.3-.081-.327.027-.3.136-.245.245-.136.3M20.293 216.246l-4.96-.545-.026 15.914 4.986.627v-15.996M25.945 147.282v3.815l2.725-2.725z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M14.5 155.457v-3.161h5.096v3.161z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
        <G>
          <Path
            d="M57.98 43.073l1.935 1.88 1.935-2.207-1.935-1.88-1.935 2.207"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M59.915 44.953l-1.935-1.88-.763-.736-3.46 3.951 2.67 2.616 3.488-3.951M42.611 53.482l-1.99 2.289 2.453 2.453 1.608-.11v-2.561l-2.07-2.071"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M44.682 55.553l2.071-2.343-2.07-2.126-2.072 2.398 2.071 2.071M39.15 68.388v3.951l3.706-.218.627-4.006-4.333.273"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M38.605 58.087l-3.106 3.57-.027 10.9 3.678-.218v-3.951l4.333-.273 1.172-7.439-3.27.218-2.78-2.807"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M38.742 57.924l-.137.163 2.78 2.807 3.27-.218.027-2.561-1.608.109-2.452-2.453-1.88 2.153M35.472 75.01l7.003-.382.381-2.507-3.706.218-3.678.218v2.453M35.472 89.752l4.66-.164.79-5.123-5.45.246v5.04"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M35.472 81.904v2.807l5.45-.246.463-2.861-5.913.3M46.753 48.713l-2.07 2.371 2.07 2.126 2.126-2.344-2.126-2.153M51.113 43.7l.3.299 2.343 2.289 3.461-3.951.763.736 1.935-2.208-3.46-3.351-5.342 6.185M37.679 115.64h1.09l.027-3.952-3.025-3.161-1.662 1.553-4.087.055-.028 5.586 7.685-.082M35.117 103.295l1.009-.027 2.425-2.998-.654-2.152-.164-.491-6.05.164-.026 4.033 2.343-.055 1.117 1.526M29.313 129.482h-1.008v6.132l3.188.027v-3.788l-2.18-2.37M31.711 119.127l7.058-.027v-2.262l-7.058.055v2.234M38.769 125.64v-3.951h-5.096v3.924l5.096.027"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M38.769 128.828v-3.188l-5.096-.027 3.951 4.578.654-.79.41-.491.08-.082M31.711 119.127l1.962 2.562h5.096V119.1l-7.058.027M23.21 130.736v3.897l2.234.708v-4.578l-2.235-.027"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M26.016 130.763h-.572v4.578l2.261.709v-5.287h-1.69M21.847 130.709h-.464v3.324l1.826.6v-3.897l-1.362-.027M.074 134.415l2.888.027 3.325-2.67-6.213-.055v2.698M12.609 124.714H8.222l-.137 4.986 6.268 7.74 3.978-2.18-5.014-5.314v-2.753l-.708-2.48M6.287 124.714H.074v7.003l6.213.054v-7.057"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M22.882 116.947h-.49v11.01h.463l1.553.027v1.471h.463l3.434.027h1.008l2.18 2.371v3.788l3.134-1.88 2.997-3.57-3.95-4.578v-3.924l-1.963-2.562v-2.234l-8.829.054M22.392 115.803h.49l7.112-.082.028-5.586 4.087-.055 1.662-1.553-.68-.736.026-4.496L34 101.769l-2.343.055-9.238.245v.054l-.027 13.68"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M20.811 91.142l-.9.027-.026 10.355-.028 26.977h2.016l-.026 2.208h1.008v-2.753h-.463v-11.009h.49v-1.144h-.49l.027-13.68-1.145.028-.49-.055.027-10.954"
            strokeWidth={WALL_STROKE_WIDTH}
          />
          <Path
            d="M40.115 90.057l-19.075 1.09v10.9h10.355l.545-4.36h5.995v.545l1.09-1.09z"
            strokeWidth={WALL_STROKE_WIDTH}
          />
        </G>
      </G>
      <G
        data-id={SHOP_LIST.tattooparlour.key}
        onPress={() => navigateToShopId(SHOP_LIST.tattooparlour.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.tattooparlour.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.tattooparlour.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.tattooparlour.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M39.069 225.157l-.191-.245-16.84 16.295 14.823 18.34 1.063-1.09.082.109 3.379 3.896-1.635 1.635 4.85 5.641 1.09-1.063.055.055 3.46 4.006 7.849-7.767.054.055 1.962 2.207 5.178-5.068-1.227-1.363 3.76-3.706-5.722-6.404-1.962-2.18-3.324-3.76-3.624-3.979-2.97-3.57-3.325-3.95-3.706-4.415-3.08-3.679"
        />
        <Text
          x={97.1}
          y={249}
          fontFamily="'Times New Roman'"
          fontSize={5.644}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan x={97.1} y={249}>
            Tattoo
          </TSpan>
          <TSpan x={100.1} y={255}>
            Parlour
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.orangecafe.key}
        onPress={() => navigateToShopId(SHOP_LIST.orangecafe.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.orangecafe.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.orangecafe.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.orangecafe.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M91.552 230.28l.354.027 8.53 1.009v1.798l3.052.354.027-32.727-14.824-1.226-.11-5.69-5.177-.382.11 6.617-9.484-.818-.3-.027h-.217V205.101l-1.118-.109-1.035 1.308v5.069l-6.54-.654v8.883l6.131.654v2.943l2.752 3.243v3.515l17.85 2.098v-1.771"
        />
        <Text
          x={137}
          y={217}
          fontFamily="'Times New Roman'"
          fontSize={6.35}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan x={131} y={218}>
            {"Orange Cafe"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.gardenshops.key}
        onPress={() => navigateToShopId(SHOP_LIST.gardenshops.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.gardenshops.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.gardenshops.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.gardenshops.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M34.398 177.262v-2.937l-11.352-.452-.028 14.933 5.369.408v1.772l10.055.79v-5.45l2.616.19-.518-3.487-2.125-2.616-1.036-.082v-2.807l-2.981-.392"
        />
        <Text
          x={89.8}
          y={184}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan x={89.8} y={182}>
            Garden
          </TSpan>
          <TSpan x={89.8} y={186}>
            Shops
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.artsncrafts.key}
        onPress={() => navigateToShopId(SHOP_LIST.artsncrafts.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.artsncrafts.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.artsncrafts.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.artsncrafts.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M23.89 154.098l-1.58 1.935-2.67-.109-5.096-.19-2.262-.082-.027 16.377v.572l9.428.545v-4.987l8.884-8.883 2.806-2.807 3.815-3.815-2.098-2.452-3.08-.082-1.498-1.58-2.044-.055-4.578 5.613"
        />
        <Text
          x={83.5}
          y={160}
          fontFamily="'Times New Roman'"
          fontSize={4.233}
          strokeWidth={0.265}
          textAnchor="middle"
          style={{
            lineHeight: "4.678px",
          }}
          transform="translate(-65.8 -.198)"
        >
          <TSpan
            x={83.5}
            y={160}
            style={{
              lineHeight: "4.678px",
            }}
          >
            {"Arts"}
          </TSpan>
          <TSpan
            x={83.5}
            y={165}
            style={{
              lineHeight: "4.678px",
            }}
          >
            {"n"}
          </TSpan>
          <TSpan
            x={83.5}
            y={169}
            style={{
              lineHeight: "4.678px",
            }}
          >
            {"Crafts"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.wonderland.key}
        onPress={() => navigateToShopId(SHOP_LIST.wonderland.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.wonderland.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.wonderland.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.wonderland.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M19.721 91.214l-6.758.246-.027 25.397h.49l1.8-.028h.163V127.811l-.709.763v.79l4.224 4.687 2.78.082v-5.532h-1.99l.027-27.032V91.214"
        />
        <Text
          transform="rotate(90 -32.601 -32.899)"
          x={92.1}
          y={-80.2}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
        >
          <TSpan
            x={94}
            y={-81}
            fontSize={4.939}
            style={{
              lineHeight: "6.625px",
            }}
          >
            {"Wonderland"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.shoes.key}
        onPress={() => navigateToShopId(SHOP_LIST.shoes.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(SHOP_LIST.shoes.key, highlightedShops)
              .fill
          }
          stroke={
            getHighlightSvgPropsForShop(SHOP_LIST.shoes.key, highlightedShops)
              .stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(SHOP_LIST.shoes.key, highlightedShops)
              .strokeWidthScale
          }
          d="M27.035 46.557L23.22 60.182h-1.635v4.905h-2.18v3.27l-1.09.545v5.995h1.09v3.27h1.635v13.08l19.075-1.09v-.545H35.21V81.982l5.995-.545 1.09-5.45-6.54.545h-.545V72.717l.545-10.9 2.725-3.815z"
        />
        <Text
          x={93.4}
          y={69}
          fontFamily="'Times New Roman'"
          fontSize={4.939}
          strokeWidth={0.265}
          textAnchor="middle"
          style={{
            lineHeight: "3.715px",
          }}
          transform="translate(-65.8 -.298)"
        >
          <TSpan
            x={92.4}
            y={74}
            style={{
              lineHeight: "3.715px",
            }}
          >
            {"Shoes!"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.bikeshop.key}
        onPress={() => navigateToShopId(SHOP_LIST.bikeshop.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.bikeshop.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.bikeshop.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.bikeshop.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M46.655 48.837h.545l4.36-4.905h-.545l5.45-5.995h.545L69 23.767l-5.45-5.45 5.45-6.54v-3.27L59.735.332 57.01.877l-5.45 6.54-5.45-4.905-8.175 10.355-4.905-4.36-11.99 15.26v5.45l4.36 4.36-4.905 5.995 7.085 7.63 10.9 10.9 2.18-2.18 2.18-2.18 1.635-2.725z"
        />
        <Text
          x={95.9}
          y={26.9}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.198)"
        >
          <TSpan x={95.9} y={26.9} fontSize={5.644}>
            {"Bike Shop"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.babies.key}
        onPress={() => navigateToShopId(SHOP_LIST.babies.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(SHOP_LIST.babies.key, highlightedShops)
              .fill
          }
          stroke={
            getHighlightSvgPropsForShop(SHOP_LIST.babies.key, highlightedShops)
              .stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(SHOP_LIST.babies.key, highlightedShops)
              .strokeWidthScale
          }
          d="M96.25 52.997l-16.895 1.09-2.725.545v3.815l-4.905 5.45-5.995.545-1.09 1.635v7.085l1.09 3.815 9.81-.545v5.45l8.72-.545v4.905h3.27v3.815h4.905v-3.815h3.815z"
        />
        <Text
          x={140}
          y={70.6}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan x={140} y={70.6} fontSize={5.644}>
            {"Babies"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.tea.key}
        onPress={() => navigateToShopId(SHOP_LIST.tea.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(SHOP_LIST.tea.key, highlightedShops)
              .fill
          }
          stroke={
            getHighlightSvgPropsForShop(SHOP_LIST.tea.key, highlightedShops)
              .stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(SHOP_LIST.tea.key, highlightedShops)
              .strokeWidthScale
          }
          d="M73.213 150.22l1.117 1.09 14.797.463h.354l2.725.082.027-18.558-19.02-.19-3.27 3.95-5.014-.081-.027 9.32 4.441.109 3.87 3.815"
        />
        <Text
          x={134}
          y={143}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          style={{
            lineHeight: "6.625px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan x={136} y={144} fontSize={4.939}>
            {"Tea Shop"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.floraver21.key}
        onPress={() => navigateToShopId(SHOP_LIST.floraver21.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.floraver21.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.floraver21.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.floraver21.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M46.535 179.459l-2.37 2.125 5.858.382v6.567l.436.027 2.643.218v2.29l.545.027.518.054.027-4.605 9.265.681.763-4.142-2.78-2.098.028-4.633 2.153-2.48-10.546-.599-1.417-.082v-4.578l-8.202-.436v3.434l3.08 3.297v4.55"
        />
        <Text
          x={120}
          y={185}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          textAnchor="middle"
          style={{
            lineHeight: "4.51px",
          }}
          transform="translate(-65.8 -.398)"
        >
          <TSpan
            x={120}
            y={178}
            style={{
              lineHeight: "4.51px",
            }}
          >
            {"Floraver"}
          </TSpan>
          <TSpan
            x={120}
            y={183}
            style={{
              lineHeight: "4.51px",
            }}
          >
            {"21"}
          </TSpan>
        </Text>
      </G>
      <G
        data-id={SHOP_LIST.foodcourt.key}
        onPress={() => navigateToShopId(SHOP_LIST.foodcourt.key)}
      >
        <Path
          fill={
            getHighlightSvgPropsForShop(
              SHOP_LIST.foodcourt.key,
              highlightedShops
            ).fill
          }
          stroke={
            getHighlightSvgPropsForShop(
              SHOP_LIST.foodcourt.key,
              highlightedShops
            ).stroke
          }
          strokeWidth={
            WALL_STROKE_WIDTH *
            getHighlightSvgPropsForShop(
              SHOP_LIST.foodcourt.key,
              highlightedShops
            ).strokeWidthScale
          }
          d="M18.86 145.847V136.8h14.17v9.047z"
        />
        <Text
          x={91.2}
          y={140}
          fontFamily="'Times New Roman'"
          fontSize={3.533}
          strokeWidth={0.265}
          textAnchor="middle"
          style={{
            lineHeight: "3.453px",
          }}
          transform="translate(-65.8 -.198)"
        >
          <TSpan
            x={91.2}
            y={140}
            style={{
              lineHeight: "3.453px",
            }}
          >
            {"Food"}
          </TSpan>
          <TSpan
            x={91.2}
            y={144}
            style={{
              lineHeight: "3.453px",
            }}
          >
            {"Court"}
          </TSpan>
        </Text>
      </G>
    </MapWrapper>
  );
};

export default SvgComponent;
