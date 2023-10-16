export enum key {
  backspace = 'Backspace'
} 

export class RouteFormModel {
  setStartCoordinate(value: KeyboardEvent, startCoordinate: string): string {
    switch (value.code) {
      case key.backspace:
        return startCoordinate = startCoordinate.slice(0, - 1)
      default:
        return startCoordinate += value.key
    }
  }

  removeClass(itemId: string, className: string): void {
    const item = document.getElementById(itemId)

    if (item) item.classList.remove(className)
  }

  addClass(itemId: string, className: string): void {
    const item = document.getElementById(itemId)

    if (item) item.classList.add(className)
  }
}
