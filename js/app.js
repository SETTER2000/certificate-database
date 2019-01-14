/*const crt = (name, code) => ({name, code});
 const log = (text, type, date=new Date())=>({text, type, date});
 const crts = [
 crt("2-Port ACS800 Serial ord:  Plug CEE 7/7 to connector C13", "ACS8008SAC-404"),
 crt("2-Port ACS800 Serial ord:  Plug CEE 7/7 to connector C13", "ACS8008DAC-404"),
 crt("2-Port ACS800 Serial Console with analog modem",  "ACS8008MDAC-404"),
 crt("2-Port ACS800 Serial Console with analog modem", "ACS8016SAC-404"),
 crt("4-Port ACS800 Serial  Plug CEE 7/7 to connector C13", "ACS8016DAC-404"),
 crt("4-Port ACS800 Serial  Plug CEE 7/7 to connector C13", "ACS8016MDAC-404"),
 crt("4-Port ACS800 Serial Console with analog modem", "ACS8032SAC-404"),
 crt("4-Port ACS800 Serial Console with analog modem", "ACS8032DAC-404")
 ];*/

new Vue({
    el: '#app',
    data() {
        return {
            crts: null,
             crt: crts[0],
            logs: [],
            selectedCrtIndex: 0,
            // phoneVisibility: false,
            search: '',
            modalVisibility: false
        };
    },
    mounted() {
        axios.get('http://www.landata.ru/api.php')
            .then(response => (this.crts = response.data));
    },
    methods: {
        selectCrt(i) {
            //console.log('Click', i);
            this.crt = crts[i];
            this.selectedCrtIndex = i;
        },
        downloadZIP(){
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

        }
    },
    computed: {
        /* phoneBtnText() {
         return this.phoneVisibility ? 'Скрыть телефон' : 'Показать телефон'
         },*/

    },
    filters: {
        date(val){
            return (val !== undefined) ? val.toLocaleString() : '';
        }
    }
});