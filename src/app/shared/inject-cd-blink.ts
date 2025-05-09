import { ElementRef, inject, NgZone } from '@angular/core';

export function injectCdBlink(): () => null {
  const element = inject(ElementRef);
  const zone = inject(NgZone);
  let active = false;

  const blink = () => {
    // Dirty Hack used to visualize the change detector

    const selectedColor = element.nativeElement.firstChild.backgroundColor;
    const visualizerColor = 'crimson';

    !active &&
      zone.runOutsideAngular(() => {
        active = true;
        setTimeout(() => {
          element.nativeElement.firstChild.style.backgroundColor =
            visualizerColor;
        });
        setTimeout(() => {
          element.nativeElement.firstChild.style.backgroundColor =
            selectedColor;
          active = false;
        }, 500);
      });

    return null;
  };

  return blink;
}
