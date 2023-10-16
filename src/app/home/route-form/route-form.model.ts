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
}
