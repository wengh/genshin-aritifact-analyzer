import * as math from "mathjs";

export interface ConfigOptions {
  standardRarity: number;
  scoreOverhead: number;
  nonFiveStarSubstractor: number;
  nonSuitSubstractors: {
    [key: number]: number;
  };
  attributeWeights: math.Matrix;
  rarityWeights: math.Matrix;
}

export const subAttrIdx = 5;

export const maximumSubAttribute = 4;

// The rarity for em goblet with crit rate + crit damage + er + atk% is 10
export const standardRarity = 2.639774092;

export const scoreOverhead = 1.176;

export const defaultFitness = 0.65;
export const defaultRarity = 8.5;

export const nonFiveStarSubstractor = 1.5;
export const nonSuitSubstractors = {
  1: 1.2, // flower
  2: 1.2, // plume
  3: 0.8, // sands
  4: 0.6, // goblet
  5: 0.6, // circlet
};


// Main attribute weights
export const attributeWeights = [
  //              f    p    s    g    c.  sub
  /* hp      */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* atk     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* def     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* em      */ [0.0, 0.0, 3.3, 3.3, 3.3, 1.0],
  /* er      */ [0.0, 0.0, 3.3, 0.0, 0.0, 1.0],
  /* hp%     */ [0.0, 0.0, 3.3, 3.3, 3.3, 1.0],
  /* atk%    */ [0.0, 0.0, 3.3, 3.3, 3.3, 1.0],
  /* def%    */ [0.0, 0.0, 3.3, 3.3, 3.3, 1.0],
  /* crit    */ [0.0, 0.0, 0.0, 0.0, 3.3, 1.333],
  /* critD   */ [0.0, 0.0, 0.0, 0.0, 3.3, 1.333],
  /* healing */ [0.0, 0.0, 0.0, 0.0, 3.3, 0.0],
  /* anemo   */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* cryo    */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* dendro  */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* electro */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* geo     */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* hydro   */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* phy     */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
  /* pyro    */ [0.0, 0.0, 0.0, 3.3, 0.0, 0.0],
];
// Weights for sub-attributes appear as main attibute
export const subAttributeWeights = [
  //              f    p    s    g    c.  sub
  /* hp      */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* atk     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* def     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* em      */ [0.0, 0.0, 1.8, 1.8, 1.8, 1.0],
  /* er      */ [0.0, 0.0, 2.2, 0.0, 0.0, 1.0],
  /* hp%     */ [0.0, 0.0, 1.8, 1.8, 1.8, 1.0],
  /* atk%    */ [0.0, 0.0, 1.8, 1.8, 1.8, 1.0],
  /* def%    */ [0.0, 0.0, 1.8, 1.8, 1.8, 1.0],
  /* crit    */ [0.0, 0.0, 0.0, 0.0, 2.2, 1.333],
  /* critD   */ [0.0, 0.0, 0.0, 0.0, 2.2, 1.333],
  /* healing */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* anemo   */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* cryo    */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* dendro  */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* electro */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* geo     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* hydro   */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* phy     */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
  /* pyro    */ [0.0, 0.0, 0.0, 0.0, 0.0, 0.0],
];

// Data from: https://nga.178.com/read.php?tid=33220261&rand=516
// prettier-ignore
export const rarityWeights = [
  //              f    p    s     g    c    sub
  /* hp      */ [1.0, 0.0, 0.0,  0.0, 0.0,  150],
  /* atk     */ [0.0, 1.0, 0.0,  0.0, 0.0,  150],
  /* def     */ [0.0, 0.0, 0.0,  0.0, 0.0,  150],
  /* em      */ [0.0, 0.0, 500,  100, 200,  100],
  /* er      */ [0.0, 0.0, 500,  0.0, 0.0,  100],
  /* hp%     */ [0.0, 0.0, 1334, 767, 1100, 100],
  /* atk%    */ [0.0, 0.0, 1333, 767, 1100, 100],
  /* def%    */ [0.0, 0.0, 1333, 766, 1100, 100],
  /* crit    */ [0.0, 0.0, 0.0,  0.0, 500,  75],
  /* critD   */ [0.0, 0.0, 0.0,  0.0, 500,  75],
  /* healing */ [0.0, 0.0, 0.0,  0.0, 500,  0.0],
  /* anemo   */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* cryo    */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* dendro  */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* electro */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* geo     */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* hydro   */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* phy     */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
  /* pyro    */ [0.0, 0.0, 0.0,  200, 0.0,  0.0],
];
