export class CDCountClass {
   private cdCount = 0;

   get cdCountString(): string {
     return `(CD ${ ++this.cdCount })`;
   }
}
