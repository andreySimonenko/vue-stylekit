<script type="text/jsx">

export default {
  name: "RtFilter",
  data: () => ({
    selectedProps: {},
    listners: [],
    listnersCaller: [],
  }),
  props:{
    changeUrl : {
      type: Boolean,
      default: false
    },
    dontClearProps:{
      type: Array,
      default: () => []
    }
  },
  provide() {
    const RtFilter = {};
    RtFilter['selectedProps'] = this.selectedProps;
    RtFilter['setProps'] = this.setProps;
    RtFilter['removeProps'] = this.removeProps;
    RtFilter['removeAllProps'] = this.removeAllProps;
    RtFilter['addListener'] = this.addListener;
    RtFilter['addListenerForCaller'] = this.addListenerForCaller;
    RtFilter['getFromHistory'] = this.getFromHistory;
    return { RtFilter };
  },
  mounted: function() {

    this.getFromHistory()

  },
  watch: {
    selectedProps(newProps, oldProps){
      if(this.changeUrl && JSON.stringify(newProps) !== JSON.stringify(oldProps)) {
        this.setHistory();
      }
    }
  },
  methods: {
    setHistory(){
      if(window.history){
        const history = window.history;
        let getLine = '';
        Object.keys(this.selectedProps).forEach((key)=>{
          if(this.selectedProps[key] && this.selectedProps[key].length > 0 && this.selectedProps[key][0].search('@') !== 0) {
            if(getLine.length > 1){
              getLine += ','
            }
            getLine += key + ':';
            getLine += this.selectedProps[key].join('+');
          }
        });
        const params = new URLSearchParams(location.search);
        if(getLine.length > 0) {
          params.set('filter', getLine);
        }else{
          if(params.get('filter') && params.get('filter').toString().length > 0){
            params.delete('filter');
          }
        }
        if(params.toString().length > 0) {
          if(location.search !== encodeURIComponent(params)) {
            history.replaceState({}, "", decodeURIComponent(`${location.pathname}?${encodeURIComponent(params)}`));
          }
        }else{
          history.replaceState({}, "", decodeURIComponent(`${location.pathname}`));
        }

      }
    },
    getFromHistory(){
      if(this.changeUrl) {
        const params = new URLSearchParams(location.search);
        const filter = params.get('filter');
        const json = {}
        if (filter) {
          filter.split(',').map((i) => {
            const item = i.split(':');
            json[item[0]] = item[1].split('+')
          })
          this.$set(this, 'selectedProps', json);
          this.callListenersCallers();
        }
      }

    },
    callListeners(){
      this.listners.forEach((fn)=>{
        fn.call(null,this.selectedProps);
      })
    },
    callListenersCallers(){
      this.listnersCaller.forEach((fn)=>{
        fn.call(null,this.selectedProps);
      })
    },

    addListener(fn){
      this.listners.push(fn);
      return this.listners.length - 1;
    },
    addListenerForCaller(fn){

      this.listnersCaller.push(fn);
      return this.listners.length - 1;
    },
    setProps(option,value){
      if(value.length === 0){
        this.removeProps(option)
      }else {
        this.selectedProps = {...this.selectedProps};
        this.$set(this.selectedProps, option, value)
        this.callListeners();
      }
    },
    removeAllProps(){

      const json = {};
      this.dontClearProps.forEach((key)=>{
        json[key] = this.selectedProps[key];
      });
      this.$set(this, 'selectedProps', json);
      this.callListeners();
    },
    removeProps(option){
      this.selectedProps = {...this.selectedProps};
      delete this.selectedProps[option];
      this.$set(this, 'selectedProps', this.selectedProps)
      this.callListeners();
    }
  },
  render(){
    return <div class="d-static">
      {this.$slots.default}
      </div>;
  }
};
</script>
