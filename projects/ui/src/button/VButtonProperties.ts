export class VButtonProperties {
  public title: string;
  public disabled: boolean;

  constructor(options: { title: string; disabled?: boolean }) {
    this.title = options.title;
    this.disabled = !!options.disabled;
  }
}
