export default class KVUtil {
    #kv: any

    constructor() {
        this.init()
    }

    aysnc function init() {
        this.#kv = await Deno.openKv()
    }
}