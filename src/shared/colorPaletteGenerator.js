import { ColorPaletteGenerator } from "@martinlaxenaire/color-palette-generator";

export const getRandomPalette = (count = 3) => {
  const generator = new ColorPaletteGenerator({});
  return generator.getRandomPalette({ length: count }).map((el) => el.hex);
};

export const getPalette = (colorHex, count = 6) => {
  return new ColorPaletteGenerator({
    baseColor: colorHex,
  })
    .getDistributedPalette({
      includeBaseColor: true,
      length: count,
      sortByBrightness: true,
    })
    .map((el) => el.hex);
};
