new Vue({
    el:"#app",
    data:{
        datas:[
            {
                id:1,
                title:"aaa"
            },
            {
                id:2,
                title:"bbb"
            },
            {
                id:3,
                title:"ccc"
            }
        ],
        state:false,
        title:''
    },
    methods:{
        aa(){
            this.state=true;
        },
        bb(val){
            this.title=val;
            this.state=false;
        }
    }



})