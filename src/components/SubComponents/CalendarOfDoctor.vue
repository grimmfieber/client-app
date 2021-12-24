<template>
    <div>
        <Dropdown class="w100" v-model="$store.state.selectedEquipmentId" :options="vuexGetters_Equipments" optionLabel="DoctorName" :filter="true" placeholder="Doktor seçimi yapınız." :showClear="true" @change="setSelectedEquipment()">
            <template #value="slotProps">
                <div v-if="slotProps.value!=null&& slotProps.value.EquipmentName!=null">{{slotProps.value.EquipmentName}}</div>
            </template>
            <template #option="slotProps">
                <p>{{slotProps.option.EquipmentName}}</p>
            </template>
        </Dropdown>
        
        <Carousel v-model="$store.state.RequestDate" :value="vuexGetters_calendarOfEquipments" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions" v-if="vuexGetters_SelectedEquipmentId!=null">
            <!--<template #header>
                <h5>Basic</h5>
            </template>-->
            <template #item="slotProps">
                <div class="product-item">
                    <div class="product-item-content">
                        <div class="p-mb-3">
                        </div>
                        <div>
                            <h4 style="text-align:center" class="p-mb-1">{{slotProps.data.day}}</h4>
                            <Button v-for="time in slotProps.data.times" :key="time"
                                    @click="selectDate(time.time)"
                                    :label="time.time"
                                    class="p-button-sm w100 button-green" />

                        </div>
                    </div>
                </div>
            </template>
        </Carousel>



        <!--<div class="row">
            <div v-for="day in vuexGetters_DoctorOfCalendar" :key="day">
                <p>
                    {{day}} STATE
                </p>
            </div>
        </div>-->
    </div>
</template>

<script>
    import { mapActions, mapGetters, mapMutations } from "vuex"
    export default {
        data() {
            return {
                responsiveOptions: [
                    {
                        breakpoint: '1024px',
                        numVisible: 7,
                        numScroll: 7
                    },
                    {
                        breakpoint: '600px',
                        numVisible: 4,
                        numScroll: 4
                    },
                    {
                        breakpoint: '480px',
                        numVisible: 1,
                        numScroll: 1
                    }
                ]
            }
        },
        computed: {
            ...mapGetters(["vuexGetters_Equipments", "vuexGetters_SelectedEquipmentId", "vuexGetters_calendarOfEquipments"])
        },
        methods: {
            ...mapActions(["vuexAction_GetEquipments", "vuexAction_GetCalendarOfEquipments"]),
            ...mapMutations(["vuexMutation_UpdateStepLevel", "vuexMutation_setRequestDate"]),
            setSelectedEquipment() {
                //seçili doktorun takvimini getir.
                this.vuexAction_GetCalendarOfEquipments();
            },
            selectDate($event) {
                //kişisel bilgiler sekmesini aktif et ve aç.
                this.vuexMutation_UpdateStepLevel(0);
                setTimeout(() => {
                    this.vuexMutation_UpdateStepLevel(1);
                }, 1)
                this.vuexMutation_setRequestDate($event);

            }


        },
        created() {
            this.vuexAction_GetEquipments();
        }
    }
</script>
<style scoped>
    .button-green {
        background-color: #28a745;
        border-color: #28a745;
    }

        .button-green:enabled:hover {
            background: #208638;
            color: #ffffff;
            border-color: unset !important;
        }
</style>