/**
 * Create an example of a JavaScriot Singleton
 * After the firsst object is created, it will return additional 
 * references to irself
 */

let obj = (function () {
    let objInstance // private variable
    function create() { //private function to create methods and properties
        let _isRunning = false
        let start = function () {
            _isRunning = true
        }
        let stop = function () {
            _isRunning = false
        }
        let currentState = function () {
            return _isRunning
        }
        return {
            start: start, 
            stop: stop,
            currentState: currentState
        }
    }
    return {
        getInstance: function () {
            if (!objInstance) {
                objInstance = create()
            }

            return objInstance
        }
    }
})()

let obj1 = obj.getInstance()
let obj2 = obj.getInstance()

console.log(obj1.currentState())
console.log(obj2.currentState())
obj1.start()
console.log(obj1.currentState())
console.log(obj2.currentState())