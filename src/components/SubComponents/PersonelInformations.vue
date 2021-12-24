<template>
    <div>
        <Toast />
        <div class="container">
            <div class="row">
                <!--İsim-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-user"></i>
                        </span>
                        <InputText maxlength="80" placeholder="Adınız" v-model="$store.state.clientName" />
                    </div>
                </div>
                <!--soyad-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-users"></i>
                        </span>
                        <InputText maxlength="80" placeholder="Soyadınız" v-model="$store.state.clientSurname" />
                    </div>
                </div>
                <!--mail-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-info-circle"></i>
                        </span>
                        <InputText maxlength="346" placeholder="Mail adresiniz" v-model="$store.state.clientMailAddress" />
                    </div>
                </div>
                <!--Cinsiyet-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-info-circle"></i>
                        </span>
                        <CascadeSelect v-model="$store.state.gender" :options="genders" optionLabel="cinsiyet" optionGroupLabel="Cinsiyet"
                                       :optionGroupChildren="['states', 'cities']" style="minWidth: 14rem" placeholder="Cinsiyetinizi seçiniz." />
                    </div>
                </div>
                <!--telefon no-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-phone"></i>
                        </span>
                        <label for="Phone"><strong></strong></label>
                        <InputMask mask="(999) 999-9999" v-model="$store.state.clientPhone" placeholder="(5xx) xxx-xxxx" />
                    </div>
                </div>

                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-globe"></i>
                        </span>
                        <Dropdown class="w100" v-model="$store.state.clientCountry" :options="vuexGetters_countries" optionLabel="name" :filter="true" placeholder="Select a Country">
                            <template #value="slotProps">
                                {{slotProps.value.name}}
                            </template>
                            <template #option="slotProps">
                                <div>{{slotProps.option.name}}</div>
                            </template>
                        </Dropdown>
                    </div>
                </div>


                <!--id input-->
                <div v-if="$store.state.clientCountry.name == 'Türkiye' || $store.state.clientCountry.name == null" class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-id-card"></i>
                        </span>
                        <div style="margin-top: 20px;"></div>
                        <InputMask class="w100" mask="99999999999" v-model="$store.state.clientID" mode="decimal" :useGrouping="false" placeholder="Türkiye cumhuriyeti kimlik numaranızı giriniz." />
                    </div>
                </div>
                <div v-else class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-id-card"></i>
                        </span>
                        <div style="margin-top: 20px;"></div>
                        <InputMask class="w100" mask="**-999-9999" v-model="$store.state.clientPassportNo" id mode="decimal" :useGrouping="false" placeholder="Pasaport numaranızı giriniz." />
                    </div>
                </div>

                <!--doğumgünü-->
                <div class="form-group col-sm-12 col-md-6 ">
                    <div class="p-inputgroup">
                        <span class="p-inputgroup-addon">
                            <i class="pi pi-calendar"></i>
                        </span>
                        <label for="date"><strong></strong></label>
                        <Calendar placeholder="Doğum tarihi" ref="birth" id="date" v-model="$store.state.clientBirthDay" :touchUI="true" dateFormat="dd.mm.yy" :monthNavigator="true" :yearNavigator="true" :showIcon="false" yearRange="1910:2021" />
                    </div>
                </div>



                <!--passport number input-->
                <!--notes-->
                <div class="p-col-12 p-md-6 p-lg-3" v-if="1==2">
                    <h5><strong>Not etmek istediklerinizi yazınız.</strong></h5>
                    <Textarea v-model="$store.state.clientNote" :autoResize="true" rows="3" cols="15" placeholder="Randevu almadan önce hastanemizle paylaşmak isteyebileceğiniz bilgiler." />
                </div>
            </div>



            <!--file upload-->
            <h5 v-if="1==2">Hastanemize gelmeden önce yüklemek istediğiniz dosya ve raporlar</h5>
            <FileUpload name="demo[]" url="./upload.php" @upload="onUpload" :multiple="true" accept="image/*" :maxFileSize="1000000" v-if="1==2">
                <template #empty>
                    <p>Gerekli dosyaları buraya sürükleyerek yükleyebilirsiniz..</p>
                </template>
            </FileUpload>





            <!--Marketing and agreement-->
            <div class="row">

                <div class="col-sm-12 col-md-6">
                    <vue-recaptcha v-if="showRecaptcha" siteKey=""
                                   size="normal"
                                   theme="light"
                                   :tabindex="0"
                                   @verify="recaptchaVerified"
                                   @expire="recaptchaExpired"
                                   @fail="recaptchaFailed"
                                   ref="vueRecaptcha">
                    </vue-recaptcha>
                </div>



                <div class="col-sm-12 col-md-6">
                    <div v-if="vuexGetters_isAcceptedAgreement == 0">
                        <label for="binary">Hasta/Hasta yakını Hakkında <span id="legal-text" @click="showLegalText">Aydınlatma Metnini</span> okuyup kabul edin.</label>
                    </div>
                    <div v-else>
                        <label for="binary">Hasta/Hasta yakını Hakkında <span id="legal-text" @click="showLegalText">Aydınlatma Metnini</span> kabul ettiniz.  </label>
                        <Checkbox id="agreementBinary" :disabled="1==1" v-model="$store.state.isAcceptedAgreement" :binary="true" />
                    </div>

                </div>

                <div class="p-field-checkbox" v-if="1==2">
                    <Checkbox id="binary" v-model="$store.state.isAcceptedMarketing" :binary="true" />
                    <label for="binary">I agree hospital's ads and wanted to subscribe their ad services.</label>
                </div>
            </div>


                <Dialog v-model:visible="display" :breakpoints="{'960px': '75vw', '640px': '100vw'}" :style="{width: '50vw'}">
                    <template #header>
                        <h3>Aydınlatma Metni</h3>
                    </template>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>

                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
                        ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </p>

                    <p>
                        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
                        dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                        qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam,
                        quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                    </p>

                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                        similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                        eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.
                    </p>

                    <template #footer>
                        <Button label="Kabul etme" icon="pi pi-times" @click="rejectAgreement()" class="p-button-text" />
                        <Button label="Onayla" icon="pi pi-check" @click="acceptAgreement()" autofocus />
                    </template>
                </Dialog>


                
            
            <div class="randevubutton">
                <Button label="Randevu al" style="width:40%;" @click="dataCheck()"></Button>
            </div>
            <ConfirmDialog></ConfirmDialog>




        </div>
    </div>
</template>


<script>

    import { mapGetters, mapActions } from "vuex"
    import { useToast } from 'primevue/usetoast'
    import vueRecaptcha from 'vue3-recaptcha2';



    export default {

        components: {
            vueRecaptcha
        },
       
        setup() {
            const toast = useToast();
            const onUpload = () => {
                toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });

            }
        },



        data() {
            return {
                placeholderForId: 'T.C. kimlik numaranızı ya da pasaport numarınızı giriniz.',
                genders: [
                    { cinsiyet: 'Erkek', code: 'M' },
                    { cinsiyet: 'Kadın', code: 'F' }

                ],
                display: false,
                sitekey: '',
                showRecaptcha: true
            }
        },
        computed: {
            ...mapGetters(["vuexGetters_countries", "vuexGetters_clientCountry", "vuexGetters_isAcceptedAgreement", "vuexGetters_isFilled", "vuexGetters_clientID", "vuexGetters_clientPassportNo", "vuexGetters_clientMailAddress","vuexGetters_isPassedreCaptcha"]),

            ...mapActions(["vuexAction_DataChecker",
                "vuexAction_setFalseAgreementData",
                "vuexAction_isAllFilled",
                "vuexAction_Initdata",
                "vuexAction_setTrueAgreementData",
                "vuexAction_manipulatePassportNo",
                "vuexAction_updatereCaptchaData"
            ]),

        },
        created() {
            console.log(this);
        },
        methods: {

            recaptchaVerified(response) {
                this.vuexAction_updatereCaptchaData
        },
        recaptchaExpired() {
            this.$refs.vueRecaptcha.reset();
        },
        recaptchaFailed() {
        },
           
        

            checkTcNum(value) {
                value = value.toString();
                var isEleven = /^[0-9]{11}$/.test(value);
                var totalX = 0;
                for (var i = 0; i < 10; i++) {
                    totalX += Number(value.substr(i, 1));
                }
                var isRuleX = totalX % 10 == value.substr(10, 1);
                var totalY1 = 0;
                var totalY2 = 0;
                for (var x = 0; x < 10; x += 2) {
                    totalY1 += Number(value.substr(x, 1));
                }
                for (var y = 1; y < 10; y += 2) {
                    totalY2 += Number(value.substr(y, 1));
                }
                var isRuleY = ((totalY1 * 7) - totalY2) % 10 == value.substr(9, 0);
                return isEleven && isRuleX && isRuleY;
            },




            checkPassportNum(passport) {
                var regsaid = /[a-zA-Z0-9]{2}[0-9]{7}/;
                return regsaid.test(passport);
            },

            showLegalText() {
                this.display = true
            },

            rejectAgreement() {
                this.display = false
                this.vuexAction_setFalseAgreementData
            },

            acceptAgreement() {
                this.display = false
                this.vuexAction_setTrueAgreementData//makes agreement true
            },


            confirm1() {
                this.$confirm.require({
                    message: 'Girdiğiniz bilgilerin doğru olduğundan emin misiniz?',
                    header: 'Onam',
                    icon: 'pi pi-exclamation-triangle',
                    accept: () => {
                        this.$toast.add({ severity: 'info', summary: 'Onaylandı', detail: 'Randevunuz Olusturuldu, Anasayfaya yonlendiriliyorsunuz.', life: 3000 });
                    },
                    reject: () => {
                        this.$toast.add({ severity: 'warn', summary: 'Uyarı', detail: 'Lütfen bilgilerinizi tekrardan, doğru bir şekilde giriniz.', life: 3000 });
                    }
                });
            },



            ValidateEmail(mail) {
                if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail)) {
                    return (true)
                } //uses regex to validate is citizenID legit or not
                return (false)
            },


            formatDateTime(datetime) {
                return new Date(datetime).toLocaleDateString();
            },




            // form validation.
            dataCheck() {
                this.vuexAction_manipulatePassportNo
                console.log(this.checkPassportNum(this.vuexGetters_clientPassportNo))
                console.log(this.vuexGetters_clientPassportNo)
                console.log(this.vuexGetters_isPassedreCaptcha)

                this.$store.state.clientBirthDay = this.formatDateTime(this.$store.state.clientBirthDay);

                this.vuexAction_isAllFilled
                if (this.vuexGetters_isFilled == true) {
                    this.$toast.add({ severity: 'error', summary: 'İşlem Başarısız', detail: 'Lütfen bütün alanları eksiksiz doldurun.', life: 3000 })
                }
                else {
                    if (this.checkTcNum(this.vuexGetters_clientID) || this.checkPassportNum(this.vuexGetters_clientPassportNo)) {
                        if (this.ValidateEmail(this.vuexGetters_clientMailAddress)) {
                            if (this.vuexGetters_isAcceptedAgreement) {
                                if (this.vuexGetters_isPassedreCaptcha) {
                                    this.confirm1()
                                }
                                else {
                                    this.$toast.add({ severity: 'error', summary: 'İşlem Başarısız', detail: 'Captcha testini tamamlayın.', life: 3000 })
                                }
                                
                                //this.vuexAction_Initdata()
                                // code to return main page after appointment has succeed.
                            }
                            else {
                                this.$toast.add({ severity: 'error', summary: 'İşlem Başarısız', detail: 'Kullanıcı sözleşmesini kabul ediniz', life: 3000 })
                            }
                        }
                        else {
                            this.$toast.add({ severity: 'error', summary: 'İşlem Başarısız', detail: 'Mail adresinizi doğru girdiğinizden emin olun.', life: 3000 })
                        }
                    }
                    else {
                        this.$toast.add({ severity: 'error', summary: 'İşlem Başarısız', detail: 'Lütfen Vatandaşlık Numaranızı doğru girdiğinize emin olun.', life: 3000 })
                    }


                }
                this.vuexAction_DataPrinter(); //prints the data has taken on the console.
                // pushes the data has collected into the data object.
            },








        }
    }

</script>

<style>
    .randevubutton {
        margin-top: 25px;
        text-align: center !important;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    .row {
        display: -webkit-box;
        flex-wrap: wrap;
    }

    #legal-text {
        color: #005bff;
    }

        #legal-text:link {
            color: green;
            background-color: transparent;
            text-decoration: none;
        }

        #legal-text:visited {
            color: pink;
            background-color: transparent;
            text-decoration: none;
        }

        #legal-text:hover {
            color: blue;
            background-color: transparent;
            text-decoration: underline;
        }

        #legal-text:active {
            color: black;
            background-color: transparent;
            text-decoration: underline;
        }


    

    .p-disabled, .p-component:disabled{
        opacity: 1.0 !important;
    }

    

</style>
