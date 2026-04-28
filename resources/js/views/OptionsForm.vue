<script setup lang="ts">
/**
 * ----------------------------------------------------------
 * Imports
 * ----------------------------------------------------------
 */
import { ref, onMounted } from 'vue';

/**
 * ----------------------------------------------------------
 * Options
 * ----------------------------------------------------------
 */
defineOptions({
    name: 'OptionsForm'
});


/**
 * ----------------------------------------------------------
 * Props / Emits
 * ----------------------------------------------------------
 */
interface Props {
    addOnUses:any,
}
 
const props = defineProps<Props>();

/**
 * ----------------------------------------------------------
 * State (refs/reactive)
 * ----------------------------------------------------------
 */
interface FormInterface {
    directions: {
        [key:string]: string
    }
}

const form = ref(<FormInterface>{
    directions:{}
});

interface DirectionsDisabledInterface {
    [key:string]: boolean
}

/**
 * ----------------------------------------------------------
 * Methods
 * ----------------------------------------------------------
 */
const onVueMounted = () => {
     props.addOnUses.getOptions(form.value);
     props.addOnUses.mergeOptionsWithPointBlockByKey(
                form.value.directions, 
                '',
                function (key) { console.log(key, '-  invalidKey') }  // check this (rm Key)
            );
}

const addDirectionExpression = () => {
    let key = `direction-${Date.now()}`;
    props.addOnUses.createExpansionPoint( key, '' );
}

const deleteDirectionExpression = (keyName: string) => {
    delete form.value.directions[keyName];
    props.addOnUses.deleteExpansionPoint( keyName );
}

const isDirectionDisabled = (keyName: string) => { 
    return !props.addOnUses.isExpansionPointDeletable(keyName);
}

/**
 * ----------------------------------------------------------
 * Lifecycle
 * ----------------------------------------------------------
 */
onMounted(onVueMounted)


</script>

<template>
    <b-col>
        <b-row>
            <b-col md="10"  class="mb-2">
            </b-col>
            <b-col md="2" class="d-grid gap-2">
                <BButton 
                    @click="addDirectionExpression()"
                    variant="success"
                > 
                    <fa icon="circle-plus" /> 
                </BButton>
            </b-col>
        </b-row>
   
        <b-row v-for="(swDirection, directionName) in form.directions" class="mt-2">
            <b-col md="10">
                Direction
            </b-col>
            <b-col md="1" class="d-grid gap-2">
                <BButton 
                    @click="deleteDirectionExpression(directionName)"
                    :disabled="isDirectionDisabled(directionName)"
                    variant="outline-warning"
                >
                    <fa icon="circle-minus" /> 
                </BButton>
            </b-col>
        </b-row>

    </b-col>
</template>
<style lang="scss">
</style>

