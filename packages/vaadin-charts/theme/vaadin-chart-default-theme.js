/**
 * @license
 * Copyright (c) 2015 - 2021 Vaadin Ltd
 * This program is available under Commercial Vaadin Developer License 4.0, available at https://vaadin.com/license/cvdl-4.0.
 */

/**
 * @license Highcharts
 *
 * (c) 2009-2016 Torstein Honsi
 *
 * License: www.highcharts.com/license
 */
import { registerStyles, css } from '@vaadin/vaadin-themable-mixin/register-styles.js';

/* When updating this file do not override vaadin-charts custom properties section */
registerStyles(
  'vaadin-chart',
  css`
    .highcharts-container {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 100%;
      text-align: left;
      line-height: normal;
      z-index: 0;
      /* #1072 */
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-family: 'Lucida Grande', 'Lucida Sans Unicode', Arial, Helvetica, sans-serif;
      font-size: 12px;
    }

    .highcharts-container svg {
      /* https://github.com/highcharts/highcharts/issues/4649 */
      /* https://github.com/vaadin/web-components/issues/2171 */
      width: 100% !important;
    }

    .highcharts-root {
      display: block;
    }

    .highcharts-root text {
      stroke-width: 0;
    }

    .highcharts-strong {
      font-weight: bold;
    }

    .highcharts-emphasized {
      font-style: italic;
    }

    .highcharts-anchor {
      cursor: pointer;
    }

    .highcharts-background {
      fill: #fff;
    }

    .highcharts-plot-border,
    .highcharts-plot-background {
      fill: none;
    }

    .highcharts-label-box {
      fill: none;
    }

    .highcharts-button-box {
      fill: inherit;
    }

    .highcharts-tracker-line {
      stroke-linejoin: round;
      stroke: rgba(192, 192, 192, 0.0001);
      stroke-width: 22;
      fill: none;
    }

    .highcharts-tracker-area {
      fill: rgba(192, 192, 192, 0.0001);
      stroke-width: 0;
    }

    /* Titles */
    .highcharts-title {
      fill: #333;
      font-size: 1.5em;
    }

    .highcharts-subtitle {
      fill: #666;
    }

    /* Axes */
    .highcharts-axis-line {
      fill: none;
      stroke: #ccd6eb;
    }

    .highcharts-yaxis .highcharts-axis-line {
      stroke-width: 0;
    }

    .highcharts-axis-title {
      fill: #666;
    }

    .highcharts-axis-labels {
      fill: #666;
      cursor: default;
      font-size: 0.9em;
    }

    .highcharts-grid-line {
      fill: none;
      stroke: #e6e6e6;
    }

    .highcharts-xaxis-grid .highcharts-grid-line {
      stroke-width: 0;
    }

    .highcharts-tick {
      stroke: #ccd6eb;
    }

    .highcharts-yaxis .highcharts-tick {
      stroke-width: 0;
    }

    .highcharts-minor-grid-line {
      stroke: #f2f2f2;
    }

    .highcharts-crosshair-thin {
      stroke-width: 1px;
      stroke: #ccc;
    }

    .highcharts-crosshair-category {
      stroke: #ccd6eb;
      stroke-opacity: 0.25;
    }

    /* Credits */
    .highcharts-credits {
      cursor: pointer;
      fill: #999;
      font-size: 0.7em;
      transition: fill 250ms, font-size 250ms;
    }

    .highcharts-credits:hover {
      fill: black;
      font-size: 1em;
    }

    /* Tooltip */
    .highcharts-tooltip {
      cursor: default;
      pointer-events: none;
      white-space: nowrap;
      transition: stroke 150ms;
    }

    .highcharts-tooltip text {
      fill: #333;
    }

    .highcharts-tooltip .highcharts-header {
      font-size: 0.85em;
    }

    .highcharts-tooltip-box {
      stroke-width: 1px;
      fill: #f7f7f7;
      fill-opacity: 0.85;
    }

    .highcharts-tooltip-box .highcharts-label-box {
      fill: #f7f7f7;
      fill-opacity: 0.85;
    }

    div.highcharts-tooltip {
      filter: none;
    }

    .highcharts-selection-marker {
      fill: #335cad;
      fill-opacity: 0.25;
    }

    .highcharts-graph {
      fill: none;
      stroke-width: 2px;
      stroke-linecap: round;
      stroke-linejoin: round;
    }

    .highcharts-state-hover .highcharts-graph {
      stroke-width: 3;
    }

    .highcharts-point-inactive {
      opacity: 0.2;
      transition: opacity 50ms;
      /* quick in */
    }

    .highcharts-series-inactive {
      opacity: 0.2;
      transition: opacity 50ms;
      /* quick in */
    }

    .highcharts-state-hover path {
      transition: stroke-width 50ms;
      /* quick in */
    }

    .highcharts-state-normal path {
      transition: stroke-width 250ms;
      /* slow out */
    }

    /* Legend hover affects points and series */
    g.highcharts-series,
    .highcharts-point,
    .highcharts-markers,
    .highcharts-data-labels {
      transition: opacity 250ms;
    }

    .highcharts-legend-series-active g.highcharts-series:not(.highcharts-series-hover),
    .highcharts-legend-point-active .highcharts-point:not(.highcharts-point-hover),
    .highcharts-legend-series-active .highcharts-markers:not(.highcharts-series-hover),
    .highcharts-legend-series-active .highcharts-data-labels:not(.highcharts-series-hover) {
      opacity: 0.2;
    }

    /* Series options */
    /* Default colors */
    /* vaadin-charts custom properties */
    .highcharts-color-0 {
      fill: var(--vaadin-charts-color-0, #7cb5ec);
      stroke: var(--vaadin-charts-color-0, #7cb5ec);
    }

    .highcharts-color-1 {
      fill: var(--vaadin-charts-color-1, #434348);
      stroke: var(--vaadin-charts-color-1, #434348);
    }

    .highcharts-color-2 {
      fill: var(--vaadin-charts-color-2, #90ed7d);
      stroke: var(--vaadin-charts-color-2, #90ed7d);
    }

    .highcharts-color-3 {
      fill: var(--vaadin-charts-color-3, #f7a35c);
      stroke: var(--vaadin-charts-color-3, #f7a35c);
    }

    .highcharts-color-4 {
      fill: var(--vaadin-charts-color-4, #8085e9);
      stroke: var(--vaadin-charts-color-4, #8085e9);
    }

    .highcharts-color-5 {
      fill: var(--vaadin-charts-color-5, #f15c80);
      stroke: var(--vaadin-charts-color-5, #f15c80);
    }

    .highcharts-color-6 {
      fill: var(--vaadin-charts-color-6, #e4d354);
      stroke: var(--vaadin-charts-color-6, #e4d354);
    }

    .highcharts-color-7 {
      fill: var(--vaadin-charts-color-7, #2b908f);
      stroke: var(--vaadin-charts-color-7, #2b908f);
    }

    .highcharts-color-8 {
      fill: var(--vaadin-charts-color-8, #f45b5b);
      stroke: var(--vaadin-charts-color-8, #f45b5b);
    }

    .highcharts-color-9 {
      fill: var(--vaadin-charts-color-9, #91e8e1);
      stroke: var(--vaadin-charts-color-9, #91e8e1);
    }
    /* end of vaadin-charts custom properties */

    .highcharts-area {
      fill-opacity: 0.75;
      stroke-width: 0;
    }

    .highcharts-markers {
      stroke-width: 1px;
      stroke: #fff;
    }

    .highcharts-a11y-markers-hidden .highcharts-point:not(.highcharts-point-hover):not(.highcharts-a11y-marker-visible),
    .highcharts-a11y-marker-hidden {
      opacity: 0;
    }

    .highcharts-point {
      stroke-width: 1px;
    }

    .highcharts-dense-data .highcharts-point {
      stroke-width: 0;
    }

    .highcharts-data-label {
      font-size: 0.9em;
      font-weight: bold;
    }

    .highcharts-data-label-box {
      fill: none;
      stroke-width: 0;
    }

    .highcharts-data-label text,
    text.highcharts-data-label {
      fill: #333;
    }

    .highcharts-data-label-connector {
      fill: none;
    }

    .highcharts-data-label-hidden {
      pointer-events: none;
    }

    .highcharts-halo {
      fill-opacity: 0.25;
      stroke-width: 0;
    }

    .highcharts-series:not(.highcharts-pie-series) .highcharts-point-select,
    .highcharts-markers .highcharts-point-select {
      fill: #ccc;
      stroke: #000;
    }

    .highcharts-column-series rect.highcharts-point {
      stroke: #fff;
    }

    .highcharts-column-series .highcharts-point {
      transition: fill-opacity 250ms;
    }

    .highcharts-column-series .highcharts-point-hover {
      fill-opacity: 0.75;
      transition: fill-opacity 50ms;
    }

    .highcharts-pie-series .highcharts-point {
      stroke-linejoin: round;
      stroke: #fff;
    }

    .highcharts-pie-series .highcharts-point-hover {
      fill-opacity: 0.75;
      transition: fill-opacity 50ms;
    }

    .highcharts-funnel-series .highcharts-point {
      stroke-linejoin: round;
      stroke: #fff;
    }

    .highcharts-funnel-series .highcharts-point-hover {
      fill-opacity: 0.75;
      transition: fill-opacity 50ms;
    }

    .highcharts-funnel-series .highcharts-point-select {
      fill: inherit;
      stroke: inherit;
    }

    .highcharts-pyramid-series .highcharts-point {
      stroke-linejoin: round;
      stroke: #fff;
    }

    .highcharts-pyramid-series .highcharts-point-hover {
      fill-opacity: 0.75;
      transition: fill-opacity 50ms;
    }

    .highcharts-pyramid-series .highcharts-point-select {
      fill: inherit;
      stroke: inherit;
    }

    .highcharts-solidgauge-series .highcharts-point {
      stroke-width: 0;
    }

    .highcharts-treemap-series .highcharts-point {
      stroke-width: 1px;
      stroke: #e6e6e6;
      transition: stroke 250ms, fill 250ms, fill-opacity 250ms;
    }

    .highcharts-treemap-series .highcharts-point-hover {
      stroke: #999;
      transition: stroke 25ms, fill 25ms, fill-opacity 25ms;
    }

    .highcharts-treemap-series .highcharts-above-level {
      display: none;
    }

    .highcharts-treemap-series .highcharts-internal-node {
      fill: none;
    }

    .highcharts-treemap-series .highcharts-internal-node-interactive {
      fill-opacity: 0.15;
      cursor: pointer;
    }

    .highcharts-treemap-series .highcharts-internal-node-interactive:hover {
      fill-opacity: 0.75;
    }

    .highcharts-vector-series .highcharts-point {
      fill: none;
      stroke-width: 2px;
    }

    .highcharts-windbarb-series .highcharts-point {
      fill: none;
      stroke-width: 2px;
    }

    .highcharts-lollipop-stem {
      stroke: #000;
    }

    .highcharts-focus-border {
      fill: none;
      stroke-width: 2px;
    }

    .highcharts-legend-item-hidden .highcharts-focus-border {
      fill: none !important;
    }

    /* Legend */
    .highcharts-legend-box {
      fill: none;
      stroke-width: 0;
    }

    .highcharts-legend-item > text {
      fill: #333;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      stroke-width: 0;
    }

    .highcharts-legend-item:hover text {
      fill: #000;
    }

    .highcharts-legend-item-hidden * {
      fill: #ccc !important;
      stroke: #ccc !important;
      transition: fill 250ms;
    }

    .highcharts-legend-nav-active {
      fill: #039;
      cursor: pointer;
    }

    .highcharts-legend-nav-inactive {
      fill: #ccc;
    }

    circle.highcharts-legend-nav-active,
    circle.highcharts-legend-nav-inactive {
      /* tracker */
      fill: rgba(192, 192, 192, 0.0001);
    }

    .highcharts-legend-title-box {
      fill: none;
      stroke-width: 0;
    }

    /* Bubble legend */
    .highcharts-bubble-legend-symbol {
      stroke-width: 2;
      fill-opacity: 0.5;
    }

    .highcharts-bubble-legend-connectors {
      stroke-width: 1;
    }

    .highcharts-bubble-legend-labels {
      fill: #333;
    }

    /* Loading */
    .highcharts-loading {
      position: absolute;
      background-color: #fff;
      opacity: 0.5;
      text-align: center;
      z-index: 10;
      transition: opacity 250ms;
    }

    .highcharts-loading-hidden {
      height: 0 !important;
      opacity: 0;
      overflow: hidden;
      transition: opacity 250ms, height 250ms step-end;
    }

    .highcharts-loading-inner {
      font-weight: bold;
      position: relative;
      top: 45%;
    }

    /* Plot bands and polar pane backgrounds */
    .highcharts-plot-band,
    .highcharts-pane {
      fill: #000;
      fill-opacity: 0.05;
    }

    .highcharts-plot-line {
      fill: none;
      stroke: #999;
      stroke-width: 1px;
    }

    /* Highcharts More and modules */
    .highcharts-boxplot-box {
      fill: #fff;
    }

    .highcharts-boxplot-median {
      stroke-width: 2px;
    }

    .highcharts-bubble-series .highcharts-point {
      fill-opacity: 0.5;
    }

    .highcharts-errorbar-series .highcharts-point {
      stroke: #000;
    }

    .highcharts-gauge-series .highcharts-data-label-box {
      stroke: #ccc;
      stroke-width: 1px;
    }

    .highcharts-gauge-series .highcharts-dial {
      fill: #000;
      stroke-width: 0;
    }

    .highcharts-polygon-series .highcharts-graph {
      fill: inherit;
      stroke-width: 0;
    }

    .highcharts-waterfall-series .highcharts-graph {
      stroke: #333;
      stroke-dasharray: 1, 3;
    }

    .highcharts-sankey-series .highcharts-point {
      stroke-width: 0;
    }

    .highcharts-sankey-series .highcharts-link {
      transition: fill 250ms, fill-opacity 250ms;
      fill-opacity: 0.5;
    }

    .highcharts-sankey-series .highcharts-point-hover.highcharts-link {
      transition: fill 50ms, fill-opacity 50ms;
      fill-opacity: 1;
    }

    .highcharts-venn-series .highcharts-point {
      fill-opacity: 0.75;
      stroke: #ccc;
      transition: stroke 250ms, fill-opacity 250ms;
    }

    .highcharts-venn-series .highcharts-point-hover {
      fill-opacity: 1;
      stroke: #ccc;
    }

    /* Highstock */
    .highcharts-navigator-mask-outside {
      fill-opacity: 0;
    }

    .highcharts-navigator-mask-inside {
      fill: #6685c2;
      /* navigator.maskFill option */
      fill-opacity: 0.25;
      cursor: ew-resize;
    }

    .highcharts-navigator-outline {
      stroke: #ccc;
      fill: none;
    }

    .highcharts-navigator-handle {
      stroke: #ccc;
      fill: #f2f2f2;
      cursor: ew-resize;
    }

    .highcharts-navigator-series {
      fill: #335cad;
      stroke: #335cad;
    }

    .highcharts-navigator-series .highcharts-graph {
      stroke-width: 1px;
    }

    .highcharts-navigator-series .highcharts-area {
      fill-opacity: 0.05;
    }

    .highcharts-navigator-xaxis .highcharts-axis-line {
      stroke-width: 0;
    }

    .highcharts-navigator-xaxis .highcharts-grid-line {
      stroke-width: 1px;
      stroke: #e6e6e6;
    }

    .highcharts-navigator-xaxis.highcharts-axis-labels {
      fill: #999;
    }

    .highcharts-navigator-yaxis .highcharts-grid-line {
      stroke-width: 0;
    }

    .highcharts-scrollbar-thumb {
      fill: #ccc;
      stroke: #ccc;
      stroke-width: 1px;
    }

    .highcharts-scrollbar-button {
      fill: #e6e6e6;
      stroke: #ccc;
      stroke-width: 1px;
    }

    .highcharts-scrollbar-arrow {
      fill: #666;
    }

    .highcharts-scrollbar-rifles {
      stroke: #666;
      stroke-width: 1px;
    }

    .highcharts-scrollbar-track {
      fill: #f2f2f2;
      stroke: #f2f2f2;
      stroke-width: 1px;
    }

    .highcharts-button {
      fill: #f7f7f7;
      stroke: #ccc;
      cursor: default;
      stroke-width: 1px;
      transition: fill 250ms;
    }

    .highcharts-button text {
      fill: #333;
    }

    .highcharts-button-hover {
      transition: fill 0ms;
      fill: #e6e6e6;
      stroke: #ccc;
    }

    .highcharts-button-hover text {
      fill: #333;
    }

    .highcharts-button-pressed {
      font-weight: bold;
      fill: #e6ebf5;
      stroke: #ccc;
    }

    .highcharts-button-pressed text {
      fill: #333;
      font-weight: bold;
    }

    .highcharts-button-disabled text {
      fill: #333;
    }

    .highcharts-range-selector-buttons .highcharts-button {
      stroke-width: 0;
    }

    .highcharts-range-label rect {
      fill: none;
    }

    .highcharts-range-label text {
      fill: #666;
    }

    .highcharts-range-input rect {
      fill: none;
    }

    .highcharts-range-input text {
      fill: #333;
    }

    .highcharts-range-input {
      stroke-width: 1px;
      stroke: #ccc;
    }

    input.highcharts-range-selector {
      position: absolute;
      border: 0;
      width: 1px;
      /* Chrome needs a pixel to see it */
      height: 1px;
      padding: 0;
      text-align: center;
      left: -9em;
      /* #4798 */
    }

    .highcharts-crosshair-label text {
      fill: #fff;
      font-size: 1.1em;
    }

    .highcharts-crosshair-label .highcharts-label-box {
      fill: inherit;
    }

    .highcharts-candlestick-series .highcharts-point {
      stroke: #000;
      stroke-width: 1px;
    }

    .highcharts-candlestick-series .highcharts-point-up {
      fill: #fff;
    }

    .highcharts-ohlc-series .highcharts-point-hover {
      stroke-width: 3px;
    }

    .highcharts-flags-series .highcharts-point .highcharts-label-box {
      stroke: #999;
      fill: #fff;
      transition: fill 250ms;
    }

    .highcharts-flags-series .highcharts-point-hover .highcharts-label-box {
      stroke: #000;
      fill: #ccd6eb;
    }

    .highcharts-flags-series .highcharts-point text {
      fill: #000;
      font-size: 0.9em;
      font-weight: bold;
    }

    /* Highmaps */
    .highcharts-map-series .highcharts-point {
      transition: fill 500ms, fill-opacity 500ms, stroke-width 250ms;
      stroke: #ccc;
    }

    .highcharts-map-series .highcharts-point-hover {
      transition: fill 0ms, fill-opacity 0ms;
      fill-opacity: 0.5;
      stroke-width: 2px;
    }

    .highcharts-mapline-series .highcharts-point {
      fill: none;
    }

    .highcharts-heatmap-series .highcharts-point {
      stroke-width: 0;
    }

    .highcharts-map-navigation {
      font-size: 1.3em;
      font-weight: bold;
      text-align: center;
    }

    .highcharts-coloraxis {
      stroke-width: 0;
    }

    .highcharts-coloraxis-marker {
      fill: #999;
    }

    .highcharts-null-point {
      fill: #f7f7f7;
    }

    /* 3d charts */
    .highcharts-3d-frame {
      fill: transparent;
    }

    /* Exporting module */
    .highcharts-contextbutton {
      fill: #fff;
      /* needed to capture hover */
      stroke: none;
      stroke-linecap: round;
    }

    .highcharts-contextbutton:hover {
      fill: #e6e6e6;
      stroke: #e6e6e6;
    }

    .highcharts-button-symbol {
      stroke: #666;
      stroke-width: 3px;
    }

    .highcharts-menu {
      border: 1px solid #999;
      background: #fff;
      padding: 5px 0;
      box-shadow: 3px 3px 10px #888;
    }

    .highcharts-menu-item {
      padding: 0.5em 1em;
      background: none;
      color: #333;
      cursor: pointer;
      transition: background 250ms, color 250ms;
    }

    .highcharts-menu-item:hover {
      background: #335cad;
      color: #fff;
    }

    /* Drilldown module */
    .highcharts-drilldown-point {
      cursor: pointer;
    }

    .highcharts-drilldown-data-label text,
    text.highcharts-drilldown-data-label,
    .highcharts-drilldown-axis-label {
      cursor: pointer;
      fill: #039;
      font-weight: bold;
      text-decoration: underline;
    }

    /* No-data module */
    .highcharts-no-data text {
      font-weight: bold;
      font-size: 12px;
      fill: #666;
    }

    /* Drag-panes module */
    .highcharts-axis-resizer {
      cursor: ns-resize;
      stroke: black;
      stroke-width: 2px;
    }

    /* Bullet type series */
    .highcharts-bullet-target {
      stroke-width: 0;
    }

    /* Lineargauge type series */
    .highcharts-lineargauge-target {
      stroke-width: 1px;
      stroke: #333;
    }

    .highcharts-lineargauge-target-line {
      stroke-width: 1px;
      stroke: #333;
    }

    /* Annotations module */
    .highcharts-annotation-label-box {
      stroke-width: 1px;
      stroke: #000;
      fill: #000;
      fill-opacity: 0.75;
    }

    .highcharts-annotation-label text {
      fill: #e6e6e6;
    }

    /* Gantt */
    .highcharts-treegrid-node-collapsed,
    .highcharts-treegrid-node-expanded {
      cursor: pointer;
    }

    .highcharts-point-connecting-path {
      fill: none;
    }

    .highcharts-grid-axis .highcharts-tick {
      stroke-width: 1px;
    }

    .highcharts-grid-axis .highcharts-axis-line {
      stroke-width: 1px;
    }

    /* RTL styles */
    :host([dir='rtl']) .highcharts-container {
      text-align: right;
    }

    :host([dir='rtl']) input.highcharts-range-selector {
      left: auto;
      right: -9em;
    }

    :host([dir='rtl']) .highcharts-menu {
      box-shadow: -3px 3px 10px #888;
    }
  `,
  { moduleId: 'vaadin-chart-default-theme' }
);
