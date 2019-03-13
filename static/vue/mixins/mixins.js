
var mymixin = {
    methods: {
        isEmpty: function(someObject){
          return Object.keys(someObject).length === 0;
        }
    }
}
export default mymixin;