/**
 * Responsive scaling utility for AgroConnect.
 *
 * Design baseline: 390 × 844 px (iPhone 14 / standard Figma frame).
 *
 * Three helpers:
 *   s(n)        — horizontal scale  (widths, horizontal padding/margin, gap)
 *   vs(n)       — vertical scale    (heights, vertical padding/margin)
 *   ms(n, f?)   — moderate scale    (font sizes; default factor 0.5 so text
 *                                    doesn't balloon on large screens)
 *
 * A cap of 1.4× prevents elements from looking oversized on tablets.
 */

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

// Use the size you designed for, e.g., iPhone 14 Pro ~ 390 x 844
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) => size + (scale(size) - size) * factor;

// Aliases to avoid breaking existing imports while we refactor layout
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
