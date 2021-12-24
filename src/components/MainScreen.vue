<template>
    <div class="mainScreen">
        <Toast />
        
        <!-- <img style="width:150px;padding-bottom:10px;" src="../assets/logo.png"/> -->
        <TabView style="margin-top:2%;" class="w100 "  ref="tabviewMain" v-model:activeIndex="vuexGetters_StepLevel">
            <TabPanel  class="aligner" header="Doktor&Tarih Seçimi">
                <CalendarOfDoctor />
                
            </TabPanel>
            <TabPanel  header="Kişisel Bilgiler" :disabled="vuexGetters_StepLevel<1">
                <PersonelInformations />
            </TabPanel>
        </TabView>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";

    import CalendarOfDoctor from './SubComponents/CalendarOfDoctor';
    import PersonelInformations from './SubComponents/PersonelInformations';
    export default {
        components: {
            CalendarOfDoctor,
            PersonelInformations
        },
        computed: {
            ...mapGetters(["vuexGetters_StepLevel"])
        }
    }
</script>

<style>
    .mainScreen {
        margin: 5%;
    }

    img {
        height: 18%;
        width: 18%;
        display:block;
        margin-left: auto;
        margin-right: auto;
        padding: 0;
    }

    .p-tabview-nav {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        
    }

    .w100 {
        width: 100% !important;
    }

    .p-tabview .p-tabview-panels {
        padding-left: 0 !important;
        padding-right: 0 !important;
        
    }

    

    .p-button.p-button-sm {
        font-size: 0.875rem;
        padding: 0.4375rem 0.875rem;
        border: 5px solid;
    }

    


    .row {
        display: flex;
        flex-wrap: wrap;
    }
</style>