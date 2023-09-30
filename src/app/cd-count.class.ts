export class CDCountClass {
   private cdCount = 0;

   get formattedCDCount(): string {
     return `(CD ${ ++this.cdCount })`;
   }
}
