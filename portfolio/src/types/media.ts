export type ImageAsset = Readonly<{
  src: string;
  alt: string;
}>;

export type ImageCollection = readonly [ImageAsset, ...ImageAsset[]];

export type Vector = Readonly<{ x: number; y: number }>;
