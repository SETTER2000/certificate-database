const crt = (name, img, article, notification, phone) => ({name, img, article, notification, phone});
const log = (text, type, date=new Date())=>({text, type, date});
const crts = [
    crt("2-Port ACS800 Serial Console with external AC/DC Power Brick - UK power cord:  Plug CEE 7/7 to connector C13", "img/1.jpg", "ACS8008SAC-404", "да", "+7 921 123 45 67"),
    crt("2-Port ACS800 Serial Console with external AC/DC Power Brick - EU power cord:  Plug CEE 7/7 to connector C13", "img/2.jpg", "ACS8008DAC-404", "да", "+7 921 123 45 67"),
    crt("2-Port ACS800 Serial Console with analog modem", "img/3.jpg", "ACS8008MDAC-404", "да", "+7 921 153 45 67"),
    crt("2-Port ACS800 Serial Console with analog modem", "img/4.jpg", "ACS8016SAC-404", "да", "+7 921 523 45 67"),
    crt("4-Port ACS800 Serial Console with external AC/DC Power Brick - UK power cord:  Plug CEE 7/7 to connector C13", "img/5.jpg", "ACS8016DAC-404", "да", "+7 921 123 45 67"),
    crt("4-Port ACS800 Serial Console with external AC/DC Power Brick - EU power cord:  Plug CEE 7/7 to connector C13", "img/6.jpg", "ACS8016MDAC-404", "да", "+7 921 123 45 67"),
    crt("4-Port ACS800 Serial Console with analog modem", "img/7.jpg", "ACS8032SAC-404", "нет", "+7 421 123 45 67"),
    crt("4-Port ACS800 Serial Console with analog modem", "img/8.jpg", "ACS8032DAC-404", "нет", "+7 521 123 45 67"),
];
new Vue({
    el: '#app',
    data: {
        crts: crts,
        crt: crts[0],
        logs:[],
        selectedCrtIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVisibility:false
    },
    methods: {
        selectCrt(i) {
            console.log('Click', i);
            this.crt = crts[i];
            this.selectedCrtIndex = i;
        },
        downloadZIP(){
            this.modalVisibility=false;
            this.logs.push(log(`Success download: ${this.crt.article}`, 'ok'))
        },
        downloadCancel(){
            this.modalVisibility=false;
            this.logs.push(log(`Cancelled download: ${this.crt.article}`, 'cnl'))
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Скрыть телефон' : 'Показать телефон'
        },
        filteredCrts() {
            return this.crts.filter(crt => crt.name.indexOf(this.search) > -1 || crt.article.indexOf(this.search) > -1);
        }
    },
    filters:{
        date(val){
            return  (val !== undefined) ? val.toLocaleString() : '';
        }
    }
});