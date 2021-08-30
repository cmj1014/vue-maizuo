module.exports.mixinsMain = {
    data() {
        return {

        };
    },
    filters: {
        
        getActors: function (value) {
            if (!value) return "暂无演员"
            return value.map(item =>item.name).join(" ");
        },
        
    },
    computed: { //计算属性
       
    },
    watch: {},
    mounted() {

    },
    methods: {
        
    }
}
