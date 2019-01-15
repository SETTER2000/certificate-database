new Vue({
    el: '#app',
    data() {
        return {
            logs: [],
            modalVisibility: false,
            crts: null,
            crt: null,
            search: null,
            selectedCrtIndex: 0,
            errored: false,
            loading: true
        };
    },
    mounted() {
        axios
            .get('/api/v1/crts/')
            .then(response => {
                console.log(response);
                this.crts = response.data;
            })
            .catch(error => {
                console.log(error.response);
                this.errored = true;
            })
            .finally(() => {
                //console.log('this.errore22d', this.errored);
                this.loading = false;
            });
    },

    methods: {
        selectCrt(i) {
            //console.log('Click', i);
            this.crt = this.crts[i];
            this.selectedCrtIndex = i;
        },
        /*     downloadZIP(){
         this.modalVisibility = false;
         this.logs.push(log(`Success download: ${this.crt.code}`, 'ok'))
         },
         downloadCancel(){
         this.modalVisibility = false;
         this.logs.push(log(`Cancelled download: ${this.crt.code}`, 'cnl'))
         },
         filteredCrts() {
         console.log('this.crts:', this.crts);
         return this.crts.filter(crt => crt.name.indexOf(this.search) > -1 || crt.code.indexOf(this.search) > -1);

         }*/
        customFilter (val) {
            // ...
            return something
        }
    },
    computed: {
        filterCrtsRegisterNot() {
            return !this.search ? ''
                :
                this.crts.filter(
                    crt => crt.name.toLowerCase().indexOf(this.search) > -1 ||
                    crt.code.toLowerCase().indexOf(this.search) > -1 ||
                    crt.name.toUpperCase().indexOf(this.search) > -1 ||
                    crt.code.toUpperCase().indexOf(this.search) > -1
                );
        },
        filterCrtsRegister() {
            return !this.search ? '' : this.crts.filter(crt => crt.name.indexOf(this.search) > -1 || crt.code.indexOf(this.search) > -1);
        }
    },
    filters: {
        date(val){
            return (val !== undefined) ? val.toLocaleString() : '';
        }
       /* quotDel(val){
            return (val !== undefined) ? val.replace( //gi, "*" ) : '';
        }*/
    }
});