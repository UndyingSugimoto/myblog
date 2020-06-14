export type Fit =
  | 'clip'
  | 'clamp'
  | 'crop'
  | 'fill'
  | 'fillmax'
  | 'max'
  | 'scale';

export type Format = 'json' | 'webp';
export type TxtAlignX = 'left' | 'center' | 'right';
export type TxtAlignY = 'top' | 'middle' | 'bottom';
export type TxtClipPosition = 'start' | 'middle' | 'end';
export type TxtFit = 'max' | '';
export type TxtItalick = 'bold' | 'italic' | '';

class ImageQueryBuilder {
  queryParam = '?';
  width(width: number) {
    this.queryParam = `${this.queryParam}&w=${width}`;
  }
  height(height: number) {
    this.queryParam = `${this.queryParam}&h=${height}`;
  }
  fit(fit: Fit = 'clip') {
    this.queryParam = `${this.queryParam}&fit=${fit}`;
  }
  quality(quality = 75) {
    this.queryParam = `${this.queryParam}&q=${quality}`;
  }
  dpr(dpr = 1) {
    this.queryParam = `${this.queryParam}&dpr=${dpr}`;
  }
  format(format: Format) {
    this.queryParam = `${this.queryParam}&fm=${format}`;
  }
  txt(txt: string) {
    this.queryParam = `${this.queryParam}&txt=${txt}`;
  }
  txtAlign(x: TxtAlignX, y: TxtAlignY) {
    this.queryParam = `${this.queryParam}&txt-align=${y},${x}`;
  }
  txtClip(position: TxtClipPosition = 'end', ellipsis: boolean) {
    this.queryParam = `${this.queryParam}&txt-clip=${position}${
      ellipsis ? ',ellipsis' : ''
    }`;
  }
  txtColor(colorCode: string) {
    this.queryParam = `${this.queryParam}&txt-color=${colorCode}`;
  }
  txtFit(txtFit: TxtFit = '') {
    this.queryParam = txtFit
      ? (this.queryParam = `${this.queryParam}&txt-fit=${txtFit}`)
      : this.queryParam;
  }
  txtFont(font: string, italic: TxtItalick = '') {
    this.queryParam = `${this.queryParam}&txt-font=${font}${
      italic ? `,${italic}` : ''
    }`;
  }
  txtSize(size = 12) {
    this.queryParam = `${this.queryParam}&txt-size=${size}`;
  }
  txtLine(lineWidth = 0) {
    this.queryParam = `${this.queryParam}&txt-line=${lineWidth}`;
  }
  txtLineColor(lineWidth: string) {
    this.queryParam = `${this.queryParam}&txt-line-color=${lineWidth}`;
  }
  txtPad(padding = 10) {
    this.queryParam = `${this.queryParam}&txt-pad=${padding}`;
  }
  txtShad(shadow = 0) {
    this.queryParam = `${this.queryParam}&txt-shad=${shadow}`;
  }
  txtWidth(width: number) {
    this.queryParam = `${this.queryParam}&txt-width=${width}`;
  }
  build() {
    return this.queryParam;
  }
}

export default ImageQueryBuilder;
