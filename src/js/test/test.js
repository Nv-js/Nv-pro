class go {
    constructor(a,b,c){
        this.a = a
        this.b = b
        this.c = c
    }

    get(type){
        let g = Array.from([1, 2, 3], x => x + x)
        this.g = g;
        return this[type]
    }


    set(type){
        let rets = [1,2,3,4],
            _this = this
        rets.forEach((ele) => {
            _this[ele] = ele
        })
    }

}
export default go