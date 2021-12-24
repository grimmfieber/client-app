import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


import "./styles/bootstrap-grid.css";
import "./styles/global.css";
import ConfirmationService from 'primevue/confirmationservice';

const app = createApp(App);
app.use(ConfirmationService);
app.use(store);
app.use(router);

import axios from 'axios'
import VueAxios from 'vue-axios'
app.use(VueAxios, axios)

//#region PrimeVue
import "../node_modules/primevue/resources/themes/saga-blue/theme.css"; //theme
import "../node_modules/primevue/resources/primevue.min.css"; //core css
import "../node_modules/primeicons/primeicons.css"; //icons
//npm install primevue@^ 3.3.5 --save
//npm install primeicons--save
import PrimeVue from "primevue/config";
app.use(PrimeVue, {
    ripple: true,
    locale: {
        startsWith: "İle başlayan",
        contains: "İçeren",
        notContains: "İçermeyen",
        endsWith: "İle biten",
        equals: "Eşit olan",
        notEquals: "Eşit olmayan",
        noFilter: "Filtre İptal",
        lt: "Daha az",
        lte: "Daha az veya eşit",
        gt: "Daha büyük",
        gte: "Daha büyük veya eşit",
        dateIs: "Tarih",
        dateIsNot: "Tarih değil",
        dateBefore: "Tarihten önce",
        dateAfter: "Tarihten sonra",
        clear: "Temizle",
        apply: "Onayla",
        matchAll: "Tümünü eşleştir",
        matchAny: "Herhangi biriyle eşleştir",
        addRule: "Kural ekle",
        removeRule: "Kural sil",
        accept: "Evet",
        reject: "Hayır",
        choose: "Seç",
        upload: "Yükle",
        cancel: "İptal",
        dayNames: [
            "Pazar",
            "Pazartesi",
            "Salı",
            "Çarşamba",
            "Perşembe",
            "Cuma",
            "Cumartesi",
        ],
        dayNamesShort: ["Paz", "Pzt", "Salı", "Çrş", "Prş", "Cuma", "Cts"],
        dayNamesMin: ["Paz", "Pzt", "Salı", "Çrş", "Prş", "Cuma", "Ct"],
        monthNames: [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmum",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
        ],
        monthNamesShort: [
            "Ocak",
            "Şubat",
            "Mart",
            "Nisan",
            "Mayıs",
            "Haziran",
            "Temmum",
            "Ağustos",
            "Eylül",
            "Ekim",
            "Kasım",
            "Aralık",
        ],
        today: "Bugün",
        weekHeader: "Hafta",
        firstDayOfWeek: 0,
        dateFormat: "dd/mm/yy",
        weak: "Zayıf",
        medium: "Orta",
        strong: "Güçlü",
        passwordPrompt: "Şifre giriniz.",
        emptyFilterMessage: "Sonuç bulunamadı.",
        emptyMessage: "Kullanılabilir seçenek yok.",
    },
});
//npm install mitt --save
import ToastService from "primevue/toastservice";
app.use(ToastService);

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import Dropdown from "primevue/dropdown";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import MultiSelect from "primevue/multiselect";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import Message from 'primevue/message';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
import Carousel from 'primevue/carousel';
import InputMask from 'primevue/inputmask';
import Textarea from 'primevue/textarea';
import FileUpload from 'primevue/fileupload';
import CascadeSelect from 'primevue/cascadeselect';
import ConfirmDialog from 'primevue/confirmdialog';
import Dialog from 'primevue/dialog';




app.component('Textarea', Textarea);
app.component("Button", Button);
app.component("InputText", InputText);
app.component("Toast", Toast);
app.component("Dropdown", Dropdown);
app.component("InputNumber", InputNumber);
app.component("Calendar", Calendar);
app.component("MultiSelect", MultiSelect);
app.component("Checkbox", Checkbox);
app.component("RadioButton", RadioButton);
app.component("Message", Message);
app.component("TabView", TabView);
app.component("TabPanel", TabPanel);
app.component("Carousel", Carousel);
app.component("InputMask", InputMask);
app.component("FileUpload", FileUpload);
app.component("CascadeSelect", CascadeSelect);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Dialog", Dialog);
//#endregion





app.mount("#app");


