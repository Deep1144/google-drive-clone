export class FirebaseObject extends Object {
    constructor(x) {
        super(x);
        this.x = x;
    }
    format() {
        // console.log(this.x.data(),'------------------');
        return {
            id: this.x.id,
            ...this.x.data()
        }
    }
}