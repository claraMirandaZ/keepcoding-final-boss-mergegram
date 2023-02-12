
<template>
    <div class="container-messages">
        Esta es la lista de mensajes de ese usuario.
        <MessageDetail v-for="message in aMessages" :message="message" :key="message.userUid" />
    </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
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
        return {
            //chat,
            aMessages,
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
    overflow: scroll;
}

.container-messages::-webkit-scrollbar {
    display: none;
}
</style>