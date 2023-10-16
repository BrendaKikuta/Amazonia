export class ManageClassesModel {
  removeClass(itemId: string, className: string): void {
    const item = document.getElementById(itemId);

    if (item) item.classList.remove(className);
  }

  addClass(itemId: string, className: string): void {
    const item = document.getElementById(itemId);

    if (item) item.classList.add(className);
  }
}
