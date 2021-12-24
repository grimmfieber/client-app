﻿import { createStore } from "vuex";
import axios from "axios" 
const baseUrl = "add your api here";
import customMethods from "../javascripts/customMethods.js";

export default createStore({
    state: {
        stepLevel: 1,
        equipments: [],
        selectedEquipmentId: null,
        calendarOfEquipments: [],
        countries: [
            { code: 'TR', name: 'Türkiye' },
            { code: 'VI', name: 'ABD Virgin Adaları' },
            { code: 'AF', name: 'Afganistan' },
            { code: 'AX', name: 'Aland Adaları' },
            { code: 'DE', name: 'Almanya' },
            { code: 'US', name: 'Amerika Birleşik Devletleri' },
            { code: 'UM', name: 'Amerika Birleşik Devletleri Küçük Dış Adaları' },
            { code: 'AS', name: 'Amerikan Samoası' },
            { code: 'AD', name: 'Andora' },
            { code: 'AO', name: 'Angola' },
            { code: 'AI', name: 'Anguilla' },
            { code: 'AQ', name: 'Antarktika' },
            { code: 'AG', name: 'Antigua ve Barbuda' },
            { code: 'AR', name: 'Arjantin' },
            { code: 'AL', name: 'Arnavutluk' },
            { code: 'AW', name: 'Aruba' },
            { code: 'QU', name: 'Avrupa Birliği' },
            { code: 'AU', name: 'Avustralya' },
            { code: 'AT', name: 'Avusturya' },
            { code: 'AZ', name: 'Azerbaycan' },
            { code: 'BS', name: 'Bahamalar' },
            { code: 'BH', name: 'Bahreyn' },
            { code: 'BD', name: 'Bangladeş' },
            { code: 'BB', name: 'Barbados' },
            { code: 'EH', name: 'Batı Sahara' },
            { code: 'BZ', name: 'Belize' },
            { code: 'BE', name: 'Belçika' },
            { code: 'BJ', name: 'Benin' },
            { code: 'BM', name: 'Bermuda' },
            { code: 'BY', name: 'Beyaz Rusya' },
            { code: 'BT', name: 'Bhutan' },
            { code: 'ZZ', name: 'Bilinmeyen veya Geçersiz Bölge' },
            { code: 'AE', name: 'Birleşik Arap Emirlikleri' },
            { code: 'GB', name: 'Birleşik Krallık' },
            { code: 'BO', name: 'Bolivya' },
            { code: 'BA', name: 'Bosna Hersek' },
            { code: 'BW', name: 'Botsvana' },
            { code: 'BV', name: 'Bouvet Adası' },
            { code: 'BR', name: 'Brezilya' },
            { code: 'BN', name: 'Brunei' },
            { code: 'BG', name: 'Bulgaristan' },
            { code: 'BF', name: 'Burkina Faso' },
            { code: 'BI', name: 'Burundi' },
            { code: 'CV', name: 'Cape Verde' },
            { code: 'GI', name: 'Cebelitarık' },
            { code: 'DZ', name: 'Cezayir' },
            { code: 'CX', name: 'Christmas Adası' },
            { code: 'DJ', name: 'Cibuti' },
            { code: 'CC', name: 'Cocos Adaları' },
            { code: 'CK', name: 'Cook Adaları' },
            { code: 'TD', name: 'Çad' },
            { code: 'CZ', name: 'Çek Cumhuriyeti' },
            { code: 'CN', name: 'Çin' },
            { code: 'DK', name: 'Danimarka' },
            { code: 'DM', name: 'Dominik' },
            { code: 'DO', name: 'Dominik Cumhuriyeti' },
            { code: 'TL', name: 'Doğu Timor' },
            { code: 'EC', name: 'Ekvator' },
            { code: 'GQ', name: 'Ekvator Ginesi' },
            { code: 'SV', name: 'El Salvador' },
            { code: 'ID', name: 'Endonezya' },
            { code: 'ER', name: 'Eritre' },
            { code: 'AM', name: 'Ermenistan' },
            { code: 'EE', name: 'Estonya' },
            { code: 'ET', name: 'Etiyopya' },
            { code: 'FK', name: 'Falkland Adaları (Malvinalar)' },
            { code: 'FO', name: 'Faroe Adaları' },
            { code: 'MA', name: 'Fas' },
            { code: 'FJ', name: 'Fiji' },
            { code: 'CI', name: 'Fildişi Sahilleri' },
            { code: 'PH', name: 'Filipinler' },
            { code: 'PS', name: 'Filistin Bölgesi' },
            { code: 'FI', name: 'Finlandiya' },
            { code: 'FR', name: 'Fransa' },
            { code: 'GF', name: 'Fransız Guyanası' },
            { code: 'TF', name: 'Fransız Güney Bölgeleri' },
            { code: 'PF', name: 'Fransız Polinezyası' },
            { code: 'GA', name: 'Gabon' },
            { code: 'GM', name: 'Gambia' },
            { code: 'GH', name: 'Gana' },
            { code: 'GN', name: 'Gine' },
            { code: 'GW', name: 'Gine-Bissau' },
            { code: 'GD', name: 'Granada' },
            { code: 'GL', name: 'Grönland' },
            { code: 'GP', name: 'Guadeloupe' },
            { code: 'GU', name: 'Guam' },
            { code: 'GT', name: 'Guatemala' },
            { code: 'GG', name: 'Guernsey' },
            { code: 'GY', name: 'Guyana' },
            { code: 'ZA', name: 'Güney Afrika' },
            { code: 'GS', name: 'Güney Georgia ve Güney Sandwich Adaları' },
            { code: 'KR', name: 'Güney Kore' },
            { code: 'CY', name: 'Güney Kıbrıs Rum Kesimi' },
            { code: 'GE', name: 'Gürcistan' },
            { code: 'HT', name: 'Haiti' },
            { code: 'HM', name: 'Heard Adası ve McDonald Adaları' },
            { code: 'IN', name: 'Hindistan' },
            { code: 'IO', name: 'Hint Okyanusu İngiliz Bölgesi' },
            { code: 'NL', name: 'Hollanda' },
            { code: 'AN', name: 'Hollanda Antilleri' },
            { code: 'HN', name: 'Honduras' },
            { code: 'HK', name: 'Hong Kong SAR - Çin' },
            { code: 'HR', name: 'Hırvatistan' },
            { code: 'IQ', name: 'Irak' },
            { code: 'VG', name: 'İngiliz Virgin Adaları' },
            { code: 'IR', name: 'İran' },
            { code: 'IE', name: 'İrlanda' },
            { code: 'ES', name: 'İspanya' },
            { code: 'IL', name: 'İsrail' },
            { code: 'SE', name: 'İsveç' },
            { code: 'CH', name: 'İsviçre' },
            { code: 'IT', name: 'İtalya' },
            { code: 'IS', name: 'İzlanda' },
            { code: 'JM', name: 'Jamaika' },
            { code: 'JP', name: 'Japonya' },
            { code: 'JE', name: 'Jersey' },
            { code: 'KH', name: 'Kamboçya' },
            { code: 'CM', name: 'Kamerun' },
            { code: 'CA', name: 'Kanada' },
            { code: 'ME', name: 'Karadağ' },
            { code: 'QA', name: 'Katar' },
            { code: 'KY', name: 'Kayman Adaları' },
            { code: 'KZ', name: 'Kazakistan' },
            { code: 'KE', name: 'Kenya' },
            { code: 'KI', name: 'Kiribati' },
            { code: 'CO', name: 'Kolombiya' },
            { code: 'KM', name: 'Komorlar' },
            { code: 'CG', name: 'Kongo' },
            { code: 'CD', name: 'Kongo Demokratik Cumhuriyeti' },
            { code: 'CR', name: 'Kosta Rika' },
            { code: 'KW', name: 'Kuveyt' },
            { code: 'KP', name: 'Kuzey Kore' },
            { code: 'MP', name: 'Kuzey Mariana Adaları' },
            { code: 'CU', name: 'Küba' },
            { code: 'KG', name: 'Kırgızistan' },
            { code: 'LA', name: 'Laos' },
            { code: 'LS', name: 'Lesotho' },
            { code: 'LV', name: 'Letonya' },
            { code: 'LR', name: 'Liberya' },
            { code: 'LY', name: 'Libya' },
            { code: 'LI', name: 'Liechtenstein' },
            { code: 'LT', name: 'Litvanya' },
            { code: 'LB', name: 'Lübnan' },
            { code: 'LU', name: 'Lüksemburg' },
            { code: 'HU', name: 'Macaristan' },
            { code: 'MG', name: 'Madagaskar' },
            { code: 'MO', name: 'Makao S.A.R. Çin' },
            { code: 'MK', name: 'Makedonya' },
            { code: 'MW', name: 'Malavi' },
            { code: 'MV', name: 'Maldivler' },
            { code: 'MY', name: 'Malezya' },
            { code: 'ML', name: 'Mali' },
            { code: 'MT', name: 'Malta' },
            { code: 'IM', name: 'Man Adası' },
            { code: 'MH', name: 'Marshall Adaları' },
            { code: 'MQ', name: 'Martinik' },
            { code: 'MU', name: 'Mauritius' },
            { code: 'YT', name: 'Mayotte' },
            { code: 'MX', name: 'Meksika' },
            { code: 'FM', name: 'Mikronezya Federal Eyaletleri' },
            { code: 'MD', name: 'Moldovya Cumhuriyeti' },
            { code: 'MC', name: 'Monako' },
            { code: 'MS', name: 'Montserrat' },
            { code: 'MR', name: 'Moritanya' },
            { code: 'MZ', name: 'Mozambik' },
            { code: 'MN', name: 'Moğolistan' },
            { code: 'MM', name: 'Myanmar' },
            { code: 'EG', name: 'Mısır' },
            { code: 'NA', name: 'Namibya' },
            { code: 'NR', name: 'Nauru' },
            { code: 'NP', name: 'Nepal' },
            { code: 'NE', name: 'Nijer' },
            { code: 'NG', name: 'Nijerya' },
            { code: 'NI', name: 'Nikaragua' },
            { code: 'NU', name: 'Niue' },
            { code: 'NF', name: 'Norfolk Adası' },
            { code: 'NO', name: 'Norveç' },
            { code: 'CF', name: 'Orta Afrika Cumhuriyeti' },
            { code: 'UZ', name: 'Özbekistan' },
            { code: 'PK', name: 'Pakistan' },
            { code: 'PW', name: 'Palau' },
            { code: 'PA', name: 'Panama' },
            { code: 'PG', name: 'Papua Yeni Gine' },
            { code: 'PY', name: 'Paraguay' },
            { code: 'PE', name: 'Peru' },
            { code: 'PN', name: 'Pitcairn' },
            { code: 'PL', name: 'Polonya' },
            { code: 'PT', name: 'Portekiz' },
            { code: 'PR', name: 'Porto Riko' },
            { code: 'RE', name: 'Reunion' },
            { code: 'RO', name: 'Romanya' },
            { code: 'RW', name: 'Ruanda' },
            { code: 'RU', name: 'Rusya Federasyonu' },
            { code: 'SH', name: 'Saint Helena' },
            { code: 'KN', name: 'Saint Kitts ve Nevis' },
            { code: 'LC', name: 'Saint Lucia' },
            { code: 'PM', name: 'Saint Pierre ve Miquelon' },
            { code: 'VC', name: 'Saint Vincent ve Grenadinler' },
            { code: 'WS', name: 'Samoa' },
            { code: 'SM', name: 'San Marino' },
            { code: 'ST', name: 'Sao Tome ve Principe' },
            { code: 'SN', name: 'Senegal' },
            { code: 'SC', name: 'Seyşeller' },
            { code: 'SL', name: 'Sierra Leone' },
            { code: 'SG', name: 'Singapur' },
            { code: 'SK', name: 'Slovakya' },
            { code: 'SI', name: 'Slovenya' },
            { code: 'SB', name: 'Solomon Adaları' },
            { code: 'SO', name: 'Somali' },
            { code: 'LK', name: 'Sri Lanka' },
            { code: 'SD', name: 'Sudan' },
            { code: 'SR', name: 'Surinam' },
            { code: 'SY', name: 'Suriye' },
            { code: 'SA', name: 'Suudi Arabistan' },
            { code: 'SJ', name: 'Svalbard ve Jan Mayen' },
            { code: 'SZ', name: 'Svaziland' },
            { code: 'RS', name: 'Sırbistan' },
            { code: 'CS', name: 'Sırbistan-Karadağ' },
            { code: 'CL', name: 'Şili' },
            { code: 'TJ', name: 'Tacikistan' },
            { code: 'TZ', name: 'Tanzanya' },
            { code: 'TH', name: 'Tayland' },
            { code: 'TW', name: 'Tayvan' },
            { code: 'TG', name: 'Togo' },
            { code: 'TK', name: 'Tokelau' },
            { code: 'TO', name: 'Tonga' },
            { code: 'TT', name: 'Trinidad ve Tobago' },
            { code: 'TN', name: 'Tunus' },
            { code: 'TC', name: 'Turks ve Caicos Adaları' },
            { code: 'TV', name: 'Tuvalu' },
            { code: 'TM', name: 'Türkmenistan' },
            { code: 'UG', name: 'Uganda' },
            { code: 'UA', name: 'Ukrayna' },
            { code: 'OM', name: 'Umman' },
            { code: 'UY', name: 'Uruguay' },
            { code: 'QO', name: 'Uzak Okyanusya' },
            { code: 'JO', name: 'Ürdün' },
            { code: 'VU', name: 'Vanuatu' },
            { code: 'VA', name: 'Vatikan' },
            { code: 'VE', name: 'Venezuela' },
            { code: 'VN', name: 'Vietnam' },
            { code: 'WF', name: 'Wallis ve Futuna' },
            { code: 'YE', name: 'Yemen' },
            { code: 'NC', name: 'Yeni Kaledonya' },
            { code: 'NZ', name: 'Yeni Zelanda' },
            { code: 'GR', name: 'Yunanistan' },
            { code: 'ZM', name: 'Zambiya' },
            { code: 'ZW', name: 'Zimbabve' },
        ],
        clientName: '',
        clientSurname: '',
        clientBirthDay: '',
        clientMailAddress: '',
        clientNote: '',
        clientPhone: '',
        clientCountry: { code: 'TR', name: 'Türkiye' },
        clientID: '',
        clientPassportNo: '',
        RequestDateStart: '',
        RequestDateEnd: '',
        isAcceptedAgreement: false,
        isAcceptedMarketing: true,
        gender: '',
        isFilled: true,
        isPassedreCaptcha: false,
        
    },
    mutations: {
        vuexMutation_UpdateStepLevel(state, level) {
            state.stepLevel = level;
        },
        vuexMutation_setRequestDate(state, time) {
            state.RequestDateStart = time.substring(0, 5);
            state.RequestDateEnd = time.substring(9, 14);
        },

        
    },
    actions: {
        vuexAction_GetEquipments({ commit, state }, param) {
            axios.get(baseUrl + "GetAppointmentList")
                .then(res => {
                    state.equipments = res.data;
                }).catch(err => {
                    console.log(err)
                });
        },
        vuexAction_GetCalendarOfEquipments({ commit, state }) {
            state.calendarOfEquipments = [];
            //buradan seçili doktora ait takvimi getir.
            let target = state.selectedEquipmentId;
            axios.get(baseUrl + "GetWorkInDatesByScheduleEquipments?citizienId=" + target.CitizienId + "&institutionId=" + target.InstitutionId)
                .then(res => {
                    const cMethods = new customMethods();
                    let day = {};
                    for (var i = 0; i < res.data.length; i++) {
                        day = {
                            day: cMethods.FormatDateTime(res.data[i].Day, true, false),
                            times: []
                        };

                        for (var j = 0; j < res.data[i].Times.length; j++) {
                            let time = res.data[i].Times[j];
                            day.times.push({
                                time: cMethods.FormatDateTime(time.StartDate, false, true) + " - " +
                                    cMethods.FormatDateTime(time.EndDate, false, true)
                            })
                        }
                        state.calendarOfEquipments.push(day);
                        console.log(state.calendarOfEquipments)
                    }

                }).catch(err => {
                    console.log(err)
                });
        },

        

        vuexAction_manipulatePassportNo({ commit, state }) {
            state.clientPassportNo = state.clientPassportNo.replace("-", "").replace("-", "");
        },

        vuexAction_updatereCaptchaData({ commit, state }) {
            state.isPassedreCaptcha = true;
        },


        vuexAction_DataPrinter({ commit, state }) {

            console.log('isim: ' + state.clientName);
            console.log('soyisim: ' + state.clientSurname);
            console.log('doğumgünü: ' + state.clientBirthDay);
            console.log('mail:' + state.clientMailAddress);
            console.log('not: ' + state.clientNote);
            console.log('phone: ' + state.clientPhone);
            console.log('ülke: ' + state.clientCountry.name);
            console.log('id: ' + state.clientID);
            console.log('Seçilen Doktor : ' + state.selectedEquipmentId.EquipmentName);
            console.log('Cinsiyet : ' + state.gender.code);
            console.log('Seçilen Saat başlangıç : ' + state.RequestDateStart + " Bitiş : " + state.RequestDateEnd);
            var data = {
                PatientName: state.clientName,
                PatientSurname: state.clientSurname,
            }
        },

        vuexAction_InitData( {commit, state}){
            //data object for api.
            let data = {
                PatientName: state.clientName,
                PatientSurname: state.clientSurname,
                PatientCitizenId: state.clientID,
                Mail: state.clientMailAddress,
                Sex: state.gender.code,
                BirthDate: state.clientBirthDay,
                RequestDateStart: state.RequestDateStart,
                RequestDateEnd: state.RequestDateEnd,
                EquipmentCitizenId: state.EquipmentCitizenId,
                EquipmentId: state.EquipmentId,
                InstitutionId: state.InstitutionId,
                Phone: state.clientPhone.replace('(', '').replace(')', '').replace(' ', '').replace('-', ''),
                EquipmentName: state.EquipmentName,
            }

            
            
        },

        vuexAction_setTrueAgreementData({ commit, state }) {
            state.isAcceptedAgreement = true;
        },

        vuexAction_setFalseAgreementData({ commit,state }) {
            state.isAcceptedAgreement = false;
        },

        


        vuexAction_isAllFilled({ commit, state }) {
            if (state.clientID == null || state.clientPassportNo == null)
                state.isFilled = true;
            else if (state.clientSurname == '' || state.clientSurname == null)
                state.isFilled = true;
            else if (state.clientBirthDay == '' || state.clientBirthDay == null)
                state.isFilled = true;
            else if (state.clientMailAddress == '' || state.clientMailAddress == null)
                state.isFilled = true;
            else if (state.clientPhone == '' || state.clientPhone == null)
                state.isFilled = true;
            else if (state.clientCountry.name == '' || state.clientCountry.name == null)
                state.isFilled = true;
            else if (state.clientName == '' || state.clientName == null)
                state.isFilled = true;
           /* else if (state.selectedEquipmentId.EquipmentName == '' || state.selectedEquipmentId.EquipmentName == null)
                state.isFilled = true;    
                */
            else if (state.gender.cinsiyet == '' || state.gender.cinsiyet == null)
                state.isFilled = true;
            else
                state.isFilled = false;
        }



    },
    modules: {},
    getters: {
        vuexGetters_StepLevel: (state) => {
            return state.stepLevel;
        },
        vuexGetters_Equipments: (state) => {
            return state.equipments;
        }, vuexGetters_SelectedEquipmentId: (state) => {
            return state.selectedEquipmentId;
        }, vuexGetters_calendarOfEquipments: (state) => {
            return state.calendarOfEquipments;
        },
        vuexGetters_clientName: (state) => {
            return state.clientName;
        },
        vuexGetters_clientSurname: (state) => {
            return state.clientSurname;
        },
        vuexGetters_clientBirthDay: (state) => {
            return state.clientBirthDay;
        },
        vuexGetters_clientMailAddress: (state) => {
            return state.clientMailAddress;
        },
        vuexGetters_clientNote: (state) => {
            return state.clientNote;
        },
        vuexGetters_clientPhone: (state) => {
            return state.clientPhone;
        },
        vuexGetters_clientCountry: (state) => {
            return state.clientCountry;
        },
        vuexGetters_clientID: (state) => {
            return state.clientID;
        },
        vuexGetters_countries: (state) => {
            return state.countries;
        },
        vuexGetters_isAcceptedAgreement: (state) => {
            return state.isAcceptedAgreement;
        },
        vuexGetters_gender: (state) => {
            return state.gender;
        },
        vuexGetters_isFilled: (state) => {
            return state.isFilled;
        },
        vuexGetters_clientPassportNo: (state) => {
            return state.clientPassportNo;
        },
        vuexGetters_isPassedreCaptcha: (state) => {
            return state.isPassedreCaptcha;
        },

    }
});
