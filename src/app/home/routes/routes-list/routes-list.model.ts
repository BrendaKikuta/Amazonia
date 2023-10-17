export class RoutesListModel {
  getPickUpCoordinate(item: any): string {
    const itemList = Object.keys(item)

    if (!itemList) return ''

    return itemList[0].toString()
  }

  getDoneCoordinate(item: any): string {
    const itemList = Object.keys(item)

    if (!itemList) return ''

    return itemList[itemList.length - 1].toString()
  }

  getRouteTime(item: any): number {
    let time = 0

    Object.entries(item).forEach((times: any) => {
      time += times[1]
    })

    const fixedNumber = time.toFixed(3)

    return parseFloat(fixedNumber)
  }
}
