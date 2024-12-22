export class formManager{
    public Elements:Record<string, HTMLInputElement> = {};
    private getInputElement(id: string): HTMLInputElement | null {
        const element = document.getElementById(id);
        if (element instanceof HTMLInputElement) {
            return element;
        } else {
            console.error(`Element with ID "${id}" is not an HTMLInputElement`);
            return null;
        }
    }

    public setElement(id:string){
            const element = this.getInputElement(id);
            if (element) {
                this.Elements[id] = element;
            }
    }
}