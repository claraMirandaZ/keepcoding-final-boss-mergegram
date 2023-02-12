
<template>
    <div class="container-messages">
        Esta es la lista de mensajes de ese usuario.
        <MessageDetail v-for="message in aMessages" :message="message" :key="message.userUid" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import MessageDetail from '@/components/Messages/MessageDetail.vue';



export default defineComponent({
    name: "MessageList",
    components: {
        MessageDetail,
    },
    setup() {
        const store = useStore();
        const aMessages = computed(() => store.state.messages);
        const container = ref<HTMLDivElement>();
        onMounted(() => {
            container.value?.scrollTo({
                top: container.value?.scrollHeight || 0,
                behavior: 'smooth',
            });
        });
        return {
            //chat,
            aMessages,
            container,
        };
    },

});

</script>

<style lang="css" scoped>
@import "~/src/assets/variables.css";

.container-messages {
    height: calc(100vh - 88px);
    /* height: 90vh; */
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    overflow-y: scroll;
}

.container-messages::-webkit-scrollbar {
    display: none;
}
</style>