export class CDCountClass {
   private cdCount = 0;

   getCDCountString(): string {
     return `(CD ${ ++this.cdCount })`;
   }
}
